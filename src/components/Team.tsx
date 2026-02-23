import { motion } from "motion/react";

export default function Team() {
  const instructors = [
    {
      name: "Balla Dóra",
      role: "Művészeti vezető, Mentor",
      color: "bg-primary",
      image: "https://picsum.photos/seed/instructor1/400/500"
    },
    {
      name: "Kovács Péter",
      role: "Senior UI/UX Designer",
      color: "bg-secondary",
      image: "https://picsum.photos/seed/instructor2/400/500"
    },
    {
      name: "Szabó Anna",
      role: "Branding szakértő",
      color: "bg-accent",
      image: "https://picsum.photos/seed/instructor3/400/500"
    }
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden" id="oktatok">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dots opacity-20" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-3 gap-16 items-center mb-24">
          <div className="lg:col-span-2">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Kik tanítanak?</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Tanulj a szakma legjobbjaitól</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Küldetésünk, hogy a magyar kreatív szakemberek következő generációját ne csak elmélettel, hanem valódi piaci tapasztalattal ruházzuk fel. Oktatóink aktív piaci szereplők, akik nap mint nap a legnevesebb márkákkal dolgoznak.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {instructors.map((person, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl aspect-[4/5]">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{person.name}</h3>
                  <p className="text-white/70 font-medium text-sm uppercase tracking-widest">{person.role}</p>
                </div>
              </div>
              {/* Playful Accent Shape */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${person.color} opacity-20 rounded-full blur-2xl -z-10 group-hover:opacity-40 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
