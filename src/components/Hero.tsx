import { motion } from "motion/react";
import { Star, CheckCircle, ShieldCheck, CreditCard, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-body bg-dots">
      {/* Playful Shapes */}
      <div className="shape-blob w-96 h-96 bg-primary top-0 right-0 -translate-y-1/2 translate-x-1/4" />
      <div className="shape-blob w-80 h-80 bg-secondary bottom-0 left-0 translate-y-1/4 -translate-x-1/4" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-60 right-20 w-8 h-8 bg-accent rounded-lg rotate-12 hidden lg:block animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust Stack Mini */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/48/48`} 
                  className="w-10 h-10 rounded-full border-4 border-white shadow-sm"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">4.9/5 (500+ végzett)</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 text-slate-900">
            Szerezz államilag elismert <span className="text-primary relative inline-block highlight-underline">grafikus szakmát</span> <span className="text-primary relative inline-block highlight-underline">10 hónap alatt</span>, és <span className="relative inline-block highlight-underline">helyezkedj el magabiztosan</span> az álomállásodban!
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Unod a bizonytalan állásokat? Sajátítsd el a Photoshop, Illustrator és AI tervezés mesterfogásait élő-online óráinkon, és építs szabadúszó karriert a kreativitásodból!
          </p>

          <div className="flex flex-col gap-8">
            <motion.a 
              href="#jelentkezes"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center justify-center text-center text-xl max-w-md"
            >
              Kérem a tájékoztatót!
            </motion.a>

            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-primary" />
                <span>Nincs elköteleződés</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={14} className="text-secondary" />
                <span>Kamatmentes részletfizetés</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>100% garancia</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://img.freepik.com/free-photo/female-logo-designer-working-her-office-graphic-tablet_23-2149119207.jpg?t=st=1771864769~exp=1771868369~hmac=6000edfa533b25499c47b14b5864974a57a19fa5800e97493526b6ea4f309f40&w=1480" 
              alt="Female logo designer working in her office" 
              className="rounded-[3rem] shadow-2xl w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Labels */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle size={16} />
              </div>
              <span className="font-bold text-sm">100% Gyakorlati oktatás</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <CheckCircle size={16} />
              </div>
              <span className="font-bold text-sm">Élő-online mentorálás</span>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <CheckCircle size={16} />
              </div>
              <span className="font-bold text-sm">Havi 37.000 Ft-tól</span>
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-6 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle size={16} />
              </div>
              <span className="font-bold text-sm">Államilag elismert</span>
            </motion.div>
          </div>

          {/* Decorative elements behind image */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
          
          {/* Playful Accent */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full hidden xl:block">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
              <span className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Scroll Down</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
