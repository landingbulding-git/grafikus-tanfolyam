import { motion } from "motion/react";
import { Monitor, Cpu, Palette } from "lucide-react";

export default function ValueProps() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden" id="tanfolyamok">
      {/* Background Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto space-y-32 relative">
        
        {/* Section 1: Software */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <Monitor size={14} />
              <span>Szoftveres tudás</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Mesterfokú szoftverhasználat a piacképes tudásért</h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Photoshop, Illustrator és InDesign oktatás, hogy bármilyen arculatot vagy kiadványt magabiztosan megtervezz. Nem csak a gombokat tanulod meg, hanem a professzionális munkafolyamatokat is.
            </p>
            <div className="flex gap-6">
              {['PS', 'AI', 'ID'].map(tool => (
                <div key={tool} className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center font-black text-slate-300 text-xl hover:text-primary hover:border-primary transition-all cursor-default">
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <img 
              src="https://picsum.photos/seed/design1/800/600" 
              className="rounded-[3rem] shadow-2xl relative z-10" 
              alt="Design Work"
              referrerPolicy="no-referrer"
            />
            {/* Decorative Frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-primary/20 rounded-[3rem] -z-0" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-dots opacity-40 -z-0" />
          </motion.div>
        </div>

        {/* Section 2: AI */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/ai/800/600" 
              className="rounded-[3rem] shadow-2xl relative z-10" 
              alt="AI Design"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-secondary/20 rounded-[3rem] -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl -z-0" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-slate-700 rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <Cpu size={14} className="text-secondary" />
              <span>Jövőbiztos technológia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">AI-vezérelt képalkotás: Legyél a jövő grafikusa</h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Mesterséges intelligencia integráció a munkafolyamatba, amivel tízszer gyorsabban és kreatívabban alkothatsz, mint a konkurencia. Megtanítjuk, hogyan használd az AI-t eszközként a kreativitásod kiterjesztésére.
            </p>
          </motion.div>
        </div>

        {/* Section 3: Vision */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <Palette size={14} />
              <span>Művészi szemlélet</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Komplex művészeti szemlélet és tervezés</h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Művészettörténeti és tipográfiai alapok, hogy ne csak "rajzolj", hanem tudatos, esztétikus vizuális válaszokat adj a megrendelőknek. Megérted a kompozíció, a színek és a betűk lélektanát.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <img 
              src="https://picsum.photos/seed/art/800/600" 
              className="rounded-[3rem] shadow-2xl relative z-10" 
              alt="Art Vision"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-accent/20 rounded-[3rem] -z-0" />
            <div className="absolute top-1/2 right-0 translate-x-1/2 w-24 h-24 bg-accent/10 rounded-full blur-xl -z-0" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
