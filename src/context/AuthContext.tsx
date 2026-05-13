"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../lib/firebase";
import { UserProfile } from "../types";
import { profileService } from "../features/auth/services/profileService";

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let profileUnsub: (() => void) | null = null;

    const authUnsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      
      if (profileUnsub) {
        profileUnsub();
        profileUnsub = null;
      }

      if (firebaseUser) {
        // Sync profile in real-time
        profileUnsub = profileService.syncProfile(firebaseUser.uid, async (syncedProfile) => {
          if (syncedProfile) {
            setProfile(syncedProfile);
          } else {
            // Profile doesn't exist, create it
            const newProfile = await profileService.createInitialProfile(
              firebaseUser.uid,
              firebaseUser.email || "",
              firebaseUser.displayName || "User"
            );
            setProfile(newProfile);
          }
          setLoading(false);
        });
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      authUnsubscribe();
      if (profileUnsub) profileUnsub();
    };
  }, []);

  const refreshProfile = async () => {
    if (user) {
      const updatedProfile = await profileService.getProfile(user.uid);
      if (updatedProfile) {
        setProfile(updatedProfile);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
