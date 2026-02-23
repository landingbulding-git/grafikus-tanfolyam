import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function Closer() {
  return (
    <section className="section-padding bg-transparent text-white overflow-hidden relative">
      {/* Playful Background Decoration - Optimized for dark gradient */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary-light font-black uppercase tracking-[0.4em] text-xs mb-6">Kezdjük el!</h4>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10 leading-[1.1] tracking-tight text-white">
              Készen állsz arra, hogy a hobbid legyen a hivatásod?
            </h2>
            
            <div className="space-y-8 mb-12">
              {[
                "Államilag elismert szakképesítés",
                "10 hónap intenzív, gyakorlati képzés",
                "Havi 37.000 Ft-os részletfizetési lehetőség"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-xl font-bold text-white/90">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                    <CheckCircle className="text-primary-light" size={24} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex flex-col p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-primary-light rounded-full animate-pulse" />
                <p className="text-primary-light font-black uppercase tracking-widest text-sm">Következő csoport indul: 2026.04.20.</p>
              </div>
              <p className="text-white/80 font-medium">Már csak 4 szabad hely maradt!</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] text-white border border-white/10 shadow-2xl relative"
          >
            {/* Playful Accent */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-light/20 rounded-3xl rotate-12 -z-10" />
            
            <h3 className="text-3xl font-extrabold mb-10 text-center tracking-tight">Jelentkezz most!</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Név</label>
                <input type="text" className="w-full px-6 py-5 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 focus:border-primary-light outline-none transition-all text-white placeholder:text-white/20" placeholder="Kovács Anna" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">E-mail</label>
                <input type="email" className="w-full px-6 py-5 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 focus:border-primary-light outline-none transition-all text-white placeholder:text-white/20" placeholder="anna@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Telefonszám</label>
                <input type="tel" className="w-full px-6 py-5 rounded-2xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 focus:border-primary-light outline-none transition-all text-white placeholder:text-white/20" placeholder="+36 30 123 4567" />
              </div>
              <button className="btn-primary w-full py-6 text-xl rounded-2xl mt-4">
                Kérem a tájékoztatót!
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
