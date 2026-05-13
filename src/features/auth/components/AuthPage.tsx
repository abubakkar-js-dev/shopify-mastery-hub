import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiAlertCircle,
  FiLoader
} from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { usePageTitle } from '@/hooks/usePageTitle';

interface AuthPageProps {
  onSuccess: () => void;
}

export default function AuthPage({ onSuccess }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Set dynamic page title
  usePageTitle(isLogin ? "Login" : "Register");

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
          displayName: displayName
        });
      }
      onSuccess();
    } catch (err: unknown) {
      console.error(err);
      let message = "An error occurred during authentication.";
      const errorCode = err && typeof err === 'object' && 'code' in err ? (err as { code: string }).code : null;

      if (errorCode === 'auth/user-not-found') message = "No account found with this email.";
      if (errorCode === 'auth/wrong-password') message = "Incorrect password.";
      if (errorCode === 'auth/email-already-in-use') message = "This email is already registered.";
      if (errorCode === 'auth/weak-password') message = "Password should be at least 6 characters.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      onSuccess();
    } catch (err: unknown) {
      console.error(err);
      setError("Failed to sign in with Google.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px] relative z-10"
      >
        {/* Logo Section */}
        <div className="text-center mb-10">
          <Link href="/">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-block mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black tracking-tighter uppercase leading-none italic text-white">
                  Mastery
                </span>
                <span className="text-[10px] font-bold text-brand-primary tracking-[0.3em] uppercase mt-1">
                  Shopify Hub
                </span>
              </div>
            </motion.div>
          </Link>
          <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
            {isLogin ? "Welcome back to the elite path" : "Begin your journey to mastery"}
          </h2>
        </div>

        {/* Auth Card */}
        <div className="bg-[#0F0F0F] border border-white/10 p-8 md:p-10 relative group">
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-primary opacity-20 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-primary opacity-20 group-hover:opacity-100 transition-opacity" />

          {/* Social Auth */}
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full h-14 bg-white text-black flex items-center justify-center gap-3 font-black uppercase text-[10px] tracking-widest hover:bg-white/90 transition-all mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.98]"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-[8px] font-black uppercase tracking-widest text-white/20 whitespace-nowrap">Or utilize credentials</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 overflow-hidden"
                >
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Identity Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 h-12 pl-12 pr-4 text-sm focus:border-brand-primary outline-none transition-colors"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Encoded Email</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 h-12 pl-12 pr-4 text-sm focus:border-brand-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Secure Password</label>
                {isLogin && (
                  <button type="button" className="text-[9px] text-brand-primary/60 hover:text-brand-primary uppercase tracking-widest transition-colors font-bold">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 h-12 pl-12 pr-12 text-sm focus:border-brand-primary outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <FiAlertCircle size={14} />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-brand-primary text-black flex items-center justify-center gap-3 font-black uppercase text-[10px] tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(149,255,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <FiLoader className="animate-spin" size={16} />
              ) : (
                <>
                  {isLogin ? "Authenticate" : "Create Account"}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              {isLogin ? (
                <>Don&apos;t have an access key? <span className="text-brand-primary">Register</span></>
              ) : (
                <>Already have clearance? <span className="text-brand-primary">Login</span></>
              )}
            </button>
          </div>
        </div>

        {/* Footer info */}
        <p className="mt-10 text-center text-[8px] font-bold text-white/20 uppercase tracking-[0.3em]">
          Encrypted Session • Secured by Mastery Systems
        </p>
      </motion.div>
    </div>
  );
}
