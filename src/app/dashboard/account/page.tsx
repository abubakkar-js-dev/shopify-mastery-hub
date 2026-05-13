"use client";

import React, { useState, useEffect } from 'react';
import { 
  FiUser as UserIcon, 
  FiMail as Mail, 
  FiShield as Shield, 
  FiSave as Save,
  FiLoader as Loader,
  FiCheckCircle as CheckCircle
} from 'react-icons/fi';
import { useAuth } from '../../../context/AuthContext';
import { useAdmin } from '../../../context/AdminContext';
import { profileService } from '../../../features/auth/services/profileService';
import toast from 'react-hot-toast';

export default function AccountPage() {
  const { user, profile, refreshProfile } = useAuth();
  const { isAdmin } = useAdmin();
  const [displayName, setDisplayName] = useState(profile?.displayName || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (profile?.displayName) {
      setDisplayName(profile.displayName); // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, [profile]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setIsSaving(true);
    setIsSuccess(false);
    
    try {
      await profileService.updateProfile(user.uid, { displayName });
      await refreshProfile();
      setIsSuccess(true);
      toast.success("Identity updated successfully");
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update identity");
    } finally {
      setIsSaving(false);
    }
  };

  if (!profile) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">System Identity</span>
          <div className="h-px w-10 bg-white/10" />
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tighter italic">Account Settings</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#0F0F0F] border border-white/10 p-8 text-center group">
            <div className="w-24 h-24 bg-brand-primary mx-auto mb-6 flex items-center justify-center text-black text-4xl font-black italic relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {profile.displayName?.charAt(0) || 'U'}
            </div>
            <h3 className="text-xl font-black uppercase tracking-tighter italic truncate">{profile.displayName}</h3>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2">
              Level {Math.floor(profile.completedLessons.length / 5) + 1} Learner
            </p>
          </div>

          <div className="bg-[#0F0F0F] border border-white/10 p-6 space-y-4">
            <div className="flex items-center gap-4 text-white/40 group">
              <Mail size={16} className="group-hover:text-brand-primary transition-colors" />
              <div className="flex-1 min-w-0">
                <p className="text-[8px] font-black uppercase tracking-widest">Email Access</p>
                <p className="text-xs truncate">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/40 group border-t border-white/5 pt-4">
              <Shield size={16} className={isAdmin ? "text-brand-primary" : "group-hover:text-brand-primary transition-colors"} />
              <div className="flex-1 min-w-0">
                <p className="text-[8px] font-black uppercase tracking-widest">Clearance Level</p>
                <p className="text-xs uppercase font-bold tracking-tighter">
                  {isAdmin ? 'System Administrator' : 'Standard Student'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Edit Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleUpdateProfile} className="bg-[#0F0F0F] border border-white/10 p-8 md:p-10 space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-1">
                  Public Display Identity
                </label>
                <div className="relative group">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-primary transition-colors" />
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 h-14 pl-12 pr-4 text-sm focus:border-brand-primary outline-none transition-all font-medium uppercase tracking-tight"
                  />
                </div>
                <p className="text-[9px] text-white/20 uppercase tracking-widest leading-relaxed">
                  This identity will be visible across the platform, including the terminal logs and leaderboards.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSaving || displayName === profile.displayName}
                className="w-full h-14 bg-brand-primary text-black flex items-center justify-center gap-3 font-black uppercase text-[10px] tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(149,255,0,0.2)] disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                {isSaving ? (
                  <Loader className="animate-spin" size={16} />
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={16} />
                    Identity Secured
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-10 p-8 border border-dashed border-white/10">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Security Protocol</h4>
            <p className="text-xs text-white/30 leading-relaxed uppercase tracking-tight">
              To update your email or reset your credentials, please utilize the primary authentication gateway. 
              Sensitive data modifications require secondary verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
