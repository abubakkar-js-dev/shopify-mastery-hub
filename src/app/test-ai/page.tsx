'use client';
import { useState } from 'react';
import { FiCpu, FiZap, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { motion } from 'motion/react';

interface TestResult {
  status: 'success' | 'error';
  response?: string;
  message?: string;
}

export default function TestAIPage() {
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const testGemini = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/ai/test');
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ status: 'error', message: 'Failed to fetch' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-[#111] border border-white/10 p-8 rounded-lg shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-brand-primary/10 rounded-lg">
            <FiCpu className="text-brand-primary text-2xl" />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-tighter italic">AI_System_Check</h1>
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Neural Link Diagnostic</p>
          </div>
        </div>

        <button
          onClick={testGemini}
          disabled={loading}
          className="w-full py-4 bg-brand-primary text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {loading ? (
            <FiLoader className="animate-spin" size={16} />
          ) : (
            <>
              Initialize Test <FiZap size={16} />
            </>
          )}
        </button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 space-y-4"
          >
            <div className="h-px bg-white/5" />
            
            <div className="flex items-center gap-2">
              {result.status === 'success' ? (
                <FiCheckCircle className="text-brand-primary" />
              ) : (
                <FiAlertCircle className="text-red-500" />
              )}
              <span className={`text-xs font-black uppercase tracking-widest ${result.status === 'success' ? 'text-brand-primary' : 'text-red-500'}`}>
                {result.status === 'success' ? 'Operational' : 'System Error'}
              </span>
            </div>

            {result.status === 'success' ? (
              <div className="p-4 bg-white/5 border border-white/10 font-mono text-[11px] leading-relaxed">
                <span className="text-brand-primary/60">{'>'} Received_Intel:</span>
                <p className="mt-2 text-white/90">{result.response}</p>
              </div>
            ) : (
              <div className="p-4 bg-red-500/5 border border-red-500/10 font-mono text-[11px]">
                <span className="text-red-400/60">{'>'} Error_Log:</span>
                <p className="mt-2 text-red-400">{result.message}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
