'use client';
import AdminDashboard from '../../components/AdminDashboard';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function AdminPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const adminDocRef = doc(db, 'admins', firebaseUser.uid);
          const adminDoc = await getDoc(adminDocRef);
          if (adminDoc.exists()) {
            setIsAdmin(true);
          } else if (firebaseUser.email?.toLowerCase() === 'mdabubakkars182@gmail.com') {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
            router.push('/');
          }
        } catch {
          setIsAdmin(false);
          router.push('/');
        }
      } else {
        setIsAdmin(false);
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (isAdmin === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0A0A0A]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Will redirect
  }

  return <AdminDashboard onClose={() => router.push('/')} />;
}
