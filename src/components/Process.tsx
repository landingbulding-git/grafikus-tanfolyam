import { motion } from "motion/react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Regisztráció (2 perc)",
      color: "text-primary",
      desc: "Töltsd ki az online jelentkezési lapot és foglald le a helyed a következő induló csoportban."
    },
    {
      num: "02",
      title: "Személyes konzultáció",
      color: "text-secondary",
      desc: "Felmérjük a tudásodat és segítünk a beiratkozásban, válaszolunk minden felmerülő kérdésedre."
    },
    {
      num: "03",
      title: "Interaktív tanulás",
      color: "text-accent",
      desc: "Vegyél részt az élő-online órákon és fejlődj mentoraink segítségével, valós projekteken dolgozva."
    },
    {
      num: "04",
      title: "Sikeres vizsga és karrier",
      color: "text-emerald-500",
      desc: "Szerezd meg a diplomát és indítsd el saját grafikai vállalkozásod vagy helyezkedj el a szakmában!"
    }
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Hogyan működik?</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Váltsd valóra a karrierváltást 4 egyszerű lépésben</h2>
          <p className="text-xl text-slate-500 font-medium">Végigkísérünk az úton az első kattintástól az első ügyfélig.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className={`text-8xl font-display font-black ${step.color} opacity-10 group-hover:opacity-20 transition-opacity mb-[-2rem] ml-[-1rem]`}>
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-slate-50 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
