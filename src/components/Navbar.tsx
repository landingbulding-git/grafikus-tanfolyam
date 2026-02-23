import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Creative Learning</span>
          </div>
        </div>
        
        <div className="flex items-center gap-10">
          <motion.a 
            href="#jelentkezes"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-slate-900/20 hover:bg-primary transition-colors"
          >
            Jelentkezem
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
