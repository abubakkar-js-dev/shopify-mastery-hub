import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { handleFirestoreError, OperationType } from "../../../lib/firestore-errors";
import { UserProfile } from "../../../types";

export const lessonService = {
  async toggleLessonCompletion(userId: string, profile: UserProfile, lessonId: string) {
    const isCompleted = profile.completedLessons.includes(lessonId);
    const newCompleted = isCompleted
      ? profile.completedLessons.filter((id) => id !== lessonId)
      : [...profile.completedLessons, lessonId];

    try {
      await updateDoc(doc(db, "users", userId), {
        completedLessons: newCompleted,
        lastActive: new Date().toISOString(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${userId}`);
      throw error;
    }
  },

  async toggleVideoCompletion(userId: string, profile: UserProfile, videoId: string) {
    const isCompleted = profile.completedVideos?.includes(videoId);
    const newCompleted = isCompleted
      ? (profile.completedVideos || []).filter((id) => id !== videoId)
      : [...(profile.completedVideos || []), videoId];

    try {
      await updateDoc(doc(db, "users", userId), {
        completedVideos: newCompleted,
        lastActive: new Date().toISOString(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${userId}`);
      throw error;
    }
  },

  async toggleTaskCompletion(userId: string, profile: UserProfile, taskId: string) {
    const isCompleted = profile.completedTasks?.includes(taskId);
    const newCompleted = isCompleted
      ? (profile.completedTasks || []).filter((id) => id !== taskId)
      : [...(profile.completedTasks || []), taskId];

    try {
      await updateDoc(doc(db, "users", userId), {
        completedTasks: newCompleted,
        lastActive: new Date().toISOString(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${userId}`);
      throw error;
    }
  },
};
