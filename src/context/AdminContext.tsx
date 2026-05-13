"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { UserProfile, AdminRecord } from "../types";
import { useAuth } from "./AuthContext";
import { adminService } from "../features/admin/services/adminService";

interface AdminContextType {
  isAdmin: boolean;
  users: UserProfile[];
  admins: AdminRecord[];
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [admins, setAdmins] = useState<AdminRecord[]>([]);

  useEffect(() => {
    let usersUnsub: (() => void) | null = null;
    let adminsUnsub: (() => void) | null = null;

    const performAdminSetup = async () => {
      if (!user) {
        setIsAdmin(false);
        setUsers([]);
        setAdmins([]);
        return;
      }

      try {
        const isUserAdmin = await adminService.checkAdmin(user.uid, user.email);
        setIsAdmin(isUserAdmin);

        if (isUserAdmin) {
          usersUnsub = adminService.syncUsers(setUsers);
          adminsUnsub = adminService.syncAdmins(setAdmins);
        } else {
          setUsers([]);
          setAdmins([]);
        }
      } catch (error) {
        console.error("Error during admin setup:", error);
        setIsAdmin(false);
        setUsers([]);
        setAdmins([]);
      }
    };

    performAdminSetup();

    return () => {
      if (usersUnsub) usersUnsub();
      if (adminsUnsub) adminsUnsub();
    };
  }, [user]);

  return (
    <AdminContext.Provider value={{ isAdmin, users, admins }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
