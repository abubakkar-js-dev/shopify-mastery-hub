import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function backupFirestore() {
  console.log("🚀 Starting Neural Backup...");
  const backup = {
    modules: [],
    lessons: [],
    timestamp: new Date().toISOString()
  };

  try {
    // 1. Fetch all Modules
    const modulesSnap = await getDocs(collection(db, "modules"));
    for (const modDoc of modulesSnap.docs) {
      const modData = modDoc.data();
      backup.modules.push({ id: modDoc.id, ...modData });

      // 2. Fetch Lessons for this Module
      const lessonsSnap = await getDocs(collection(db, `modules/${modDoc.id}/lessons`));
      for (const lessonDoc of lessonsSnap.docs) {
        backup.lessons.push({ 
          id: lessonDoc.id, 
          moduleId: modDoc.id, 
          ...lessonDoc.data() 
        });
      }
    }

    const backupPath = path.join(process.cwd(), "firestore_backup.json");
    fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2));
    
    console.log("✅ Backup Secured!");
    console.log(`📂 Location: ${backupPath}`);
    console.log(`📊 Stats: ${backup.modules.length} Modules, ${backup.lessons.length} Lessons`);
  } catch (error) {
    console.error("❌ Backup Failed:", error);
  }
}

backupFirestore();
