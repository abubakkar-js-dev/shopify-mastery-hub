import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { handleFirestoreError, OperationType } from "../../../lib/firestore-errors";
import { UserProfile } from "../../../types";

export const profileService = {
  /**
   * Fetches a user profile by UID
   */
  async getProfile(uid: string): Promise<UserProfile | null> {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as UserProfile;
      }
      return null;
    } catch (error) {
      handleFirestoreError(error as Error, OperationType.GET, `users/${uid}`);
      return null;
    }
  },

  /**
   * Creates a default initial profile for a new user
   */
  async createInitialProfile(uid: string, email: string, displayName: string): Promise<UserProfile> {
    const newProfile: UserProfile = {
      uid,
      displayName: displayName || "User",
      email: email || "",
      completedLessons: [],
      completedVideos: [],
      completedTasks: [],
      lastActive: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, "users", uid), newProfile);
      return newProfile;
    } catch (error) {
      handleFirestoreError(error as Error, OperationType.CREATE, `users/${uid}`);
      throw error;
    }
  },

  /**
   * Updates specific fields of a user's profile
   */
  async updateProfile(uid: string, data: Partial<UserProfile>): Promise<void> {
    try {
      const docRef = doc(db, "users", uid);
      await updateDoc(docRef, data);
    } catch (error) {
      handleFirestoreError(error as Error, OperationType.UPDATE, `users/${uid}`);
      throw error;
    }
  },

  /**
   * Sets up a real-time snapshot listener for a user's profile
   */
  syncProfile(uid: string, callback: (profile: UserProfile | null) => void): () => void {
    const docRef = doc(db, "users", uid);
    
    return onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          callback(docSnap.data() as UserProfile);
        } else {
          callback(null);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, `users/${uid}`);
      }
    );
  }
};
