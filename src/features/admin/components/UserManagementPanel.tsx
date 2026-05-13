"use client";

import { motion } from "motion/react";
import { format } from "date-fns";
import { useAdminUsers } from "../hooks/useAdminUsers";
import { cn } from "../../../lib/utils";
import { LuShieldAlert as Shield, LuShieldCheck as ShieldCheck, LuTrash2 as Trash2 } from "react-icons/lu";

export default function UserManagementPanel() {
  const { users, admins, lessons, toggleAdmin, deleteUser } = useAdminUsers();

  const checkIfAdmin = (uid: string) => {
    return admins.some(a => a.uid === uid) || users.find(u => u.uid === uid)?.email?.toLowerCase() === "mdabubakkars182@gmail.com";
  };

  const isPermanentAdmin = (email?: string | null) => {
    return email?.toLowerCase() === "mdabubakkars182@gmail.com";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-10"
    >
      <header>
        <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">
          User Database
        </h1>
        <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
          Real-time tracking of student progress and engagement
        </p>
      </header>

      <div className="bg-brand-surface border border-white/10 overflow-hidden overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                Student
              </th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                Status
              </th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                Completion
              </th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                Last Active
              </th>
              <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((user) => {
              const isAdmin = checkIfAdmin(user.uid);
              const isPerm = isPermanentAdmin(user.email);
              
              return (
                <tr
                  key={user.uid}
                  className="hover:bg-white/2 transition-colors group"
                >
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 border flex items-center justify-center text-[10px] font-black uppercase",
                        isAdmin ? "bg-brand-primary/10 border-brand-primary/40 text-brand-primary" : "bg-white/5 border-white/10 text-white/40"
                      )}>
                        {user.displayName?.[0] || "U"}
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-tight">
                          {user.displayName}
                        </p>
                        <p className="text-[10px] text-white/20 uppercase truncate max-w-50">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    {isAdmin ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[8px] font-black uppercase">
                        <ShieldCheck size={10} /> Admin
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 text-white/40 text-[8px] font-black uppercase">
                        Student
                      </span>
                    )}
                  </td>
                  <td className="px-8 py-4 text-xs">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-1 bg-white/10 w-24">
                        <div
                          className="h-full bg-brand-primary"
                          style={{
                            width: `${((user.completedLessons?.length || 0) / (lessons.length || 1)) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="font-mono text-brand-primary font-bold">
                        {user.completedLessons?.length || 0}d
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">
                      {user.lastActive
                        ? format(new Date(user.lastActive), "MMM dd, HH:mm")
                        : "—"}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {!isPerm && (
                        <>
                          <button
                            onClick={() => toggleAdmin(user.uid, isAdmin)}
                            className={cn(
                              "p-2 transition-all border",
                              isAdmin ? "text-red-400 border-red-400/20 hover:bg-red-400/10" : "text-brand-primary border-brand-primary/20 hover:bg-brand-primary/10"
                            )}
                            title={isAdmin ? "Revoke Admin" : "Grant Admin"}
                          >
                            <Shield size={14} />
                          </button>
                          <button 
                            onClick={() => deleteUser(user.uid)}
                            className="p-2 text-white/20 hover:text-red-400 border border-transparent hover:border-red-400/20 transition-all"
                          >
                            <Trash2 size={14} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
