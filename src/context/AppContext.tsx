"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { handleFirestoreError, OperationType } from "../lib/firestore-errors";
import { Lesson, Module, UserProfile, AdminRecord } from "../types";
import { INITIAL_LESSONS, INITIAL_MODULES } from "../features/modules/seed";

interface AppContextType {
  user: User | null;
  profile: UserProfile | null;
  isAdmin: boolean;
  modules: Module[];
  lessons: Lesson[];
  users: UserProfile[];
  admins: AdminRecord[];
  loading: boolean;
  refreshProfile: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [modules, setModules] = useState<Module[]>(INITIAL_MODULES);
  const [lessons, setLessons] = useState<Lesson[]>(INITIAL_LESSONS);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [admins, setAdmins] = useState<AdminRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (uid: string) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProfile(docSnap.data() as UserProfile);
    } else {
      const newProfile: UserProfile = {
        uid,
        displayName: auth.currentUser?.displayName || "User",
        email: auth.currentUser?.email || "",
        completedLessons: [],
        completedVideos: [],
        completedTasks: [],
        lastActive: new Date().toISOString(),
      };
      await setDoc(docRef, newProfile);
      setProfile(newProfile);
    }
  };


  useEffect(() => {
    let profileUnsub: (() => void) | null = null;
    let usersUnsub: (() => void) | null = null;
    let adminsUnsub: (() => void) | null = null;

    const authUnsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // Real-time profile listener
        profileUnsub = onSnapshot(doc(db, "users", firebaseUser.uid), async (docSnap) => {
          if (docSnap.exists()) {
            setProfile(docSnap.data() as UserProfile);
          } else {
            const newProfile: UserProfile = {
              uid: firebaseUser.uid,
              displayName: auth.currentUser?.displayName || "User",
              email: auth.currentUser?.email || "",
              completedLessons: [],
              completedVideos: [],
              completedTasks: [],
              lastActive: new Date().toISOString(),
            };
            await setDoc(doc(db, "users", firebaseUser.uid), newProfile);
            setProfile(newProfile);
          }
        });

        // Admin checks and additional listeners
        const adminDocRef = doc(db, "admins", firebaseUser.uid);
        const adminDoc = await getDoc(adminDocRef);
        const isUserAdmin = adminDoc.exists() || 
          auth.currentUser?.email?.toLowerCase() === "mdabubakkars182@gmail.com";

        if (isUserAdmin) {
          setIsAdmin(true);
          // Subscribe to all users for admin view
          usersUnsub = onSnapshot(query(collection(db, "users")), (snapshot) => {
            setUsers(snapshot.docs.map(d => d.data() as UserProfile));
          });
          // Subscribe to all admins for admin view
          adminsUnsub = onSnapshot(query(collection(db, "admins")), (snapshot) => {
            setAdmins(snapshot.docs.map(d => d.data() as AdminRecord));
          });
        } else {
          setIsAdmin(false);
        }

        setLoading(false);
      } else {
        setProfile(null);
        setIsAdmin(false);
        setUsers([]);
        setAdmins([]);
        setLoading(false);
      }
    });

    return () => {
      authUnsubscribe();
      if (profileUnsub) profileUnsub();
      if (usersUnsub) usersUnsub();
      if (adminsUnsub) adminsUnsub();
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      return;
    }

    const qModules = query(collection(db, "modules"), orderBy("order"));
    const lessonUnsubscribes: { [key: string]: () => void } = {};

    const unsubModules = onSnapshot(
      qModules,
      (snapshot) => {
        const fetchedModules = snapshot.docs.map((doc) => doc.data() as Module);
        setModules(fetchedModules.length > 0 ? fetchedModules : INITIAL_MODULES);

        fetchedModules.forEach((mod) => {
          if (!lessonUnsubscribes[mod.id]) {
            const qLessons = query(
              collection(db, `modules/${mod.id}/lessons`),
              orderBy("order")
            );
            lessonUnsubscribes[mod.id] = onSnapshot(
              qLessons,
              (lSnap) => {
                setLessons((prev) => {
                  const fetchedLessons = lSnap.docs.map((d) => d.data() as Lesson);
                  if (fetchedLessons.length === 0) return prev;
                  const filtered = prev.filter((l) => l.moduleId !== mod.id);
                  return [...filtered, ...fetchedLessons].sort((a, b) => a.order - b.order);
                });
              },
              (error) => {
                handleFirestoreError(error, OperationType.LIST, `modules/${mod.id}/lessons`);
              }
            );
          }
        });

        if (snapshot.empty) {
          setModules(INITIAL_MODULES);
          setLessons(INITIAL_LESSONS);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, "modules");
        setModules(INITIAL_MODULES);
        setLessons(INITIAL_LESSONS);
      }
    );

    return () => {
      unsubModules();
      Object.values(lessonUnsubscribes).forEach((unsub) => unsub());
    };
  }, [user, loading]);

  const refreshProfile = async () => {
    if (user) await fetchProfile(user.uid);
  };

  return (
    <AppContext.Provider value={{ user, profile, isAdmin, modules, lessons, users, admins, loading, refreshProfile }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
