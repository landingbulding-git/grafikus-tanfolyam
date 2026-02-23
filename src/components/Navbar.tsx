import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">GA</div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight leading-none">Grafikus Akadémia</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Creative Learning</span>
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
