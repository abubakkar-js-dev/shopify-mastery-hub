import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { firestorePaths } from "../../../shared/lib/firestorePaths";
import { handleFirestoreError, OperationType } from "../../../lib/firestore-errors";
import { Lesson, Module } from "../../../types";

export const moduleService = {
  syncModules(callback: (modules: Module[]) => void): () => void {
    const q = query(collection(db, firestorePaths.modules()), orderBy("order"));
    
    return onSnapshot(
      q,
      (snapshot) => {
        callback(snapshot.docs.map((doc) => doc.data() as Module));
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, "modules");
      }
    );
  },

  syncLessons(moduleId: string, callback: (lessons: Lesson[]) => void): () => void {
    const q = query(
      collection(db, `modules/${moduleId}/lessons`),
      orderBy("order")
    );

    return onSnapshot(
      q,
      (snapshot) => {
        callback(snapshot.docs.map((doc) => doc.data() as Lesson));
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, `modules/${moduleId}/lessons`);
      }
    );
  }
};
