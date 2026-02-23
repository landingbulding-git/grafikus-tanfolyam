import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "3 hónappal a képzés után már saját ügyfeleim voltak! A tanfolyam minden várakozásomat felülmúlta. A mentorok segítőkészek voltak.",
      name: "Kovács Anna",
      role: "Szabadúszó Grafikus",
      color: "bg-primary/5",
      image: "https://picsum.photos/seed/user1/60/60"
    },
    {
      text: "A legjobb döntés volt ide jelentkezni. A Photoshop és Illustrator tudásom az alapokról a profi szintre fejlődött 10 hónap alatt.",
      name: "Nagy Márk",
      role: "Junior Designer",
      color: "bg-secondary/10",
      image: "https://picsum.photos/seed/user2/60/60"
    },
    {
      text: "Végre egy képzés, ahol nem csak az elméletet darálják. A valós projektek segítettek abban, hogy magabiztosan vállaljak munkát.",
      name: "Tóth Eszter",
      role: "Kreatív Ügynökségi Tag",
      color: "bg-accent/5",
      image: "https://picsum.photos/seed/user3/60/60"
    },
    {
      text: "Soha nem gondoltam volna, hogy 10 hónap alatt ilyen portfóliót tudok összeállítani. Az AI modul pedig teljesen új távlatokat nyitott.",
      name: "Molnár Gábor",
      role: "Szabadúszó",
      color: "bg-emerald-50",
      image: "https://picsum.photos/seed/user4/60/60"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dots opacity-10" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Vélemények</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Több mint 500+ hallgatónk mondta rólunk</h2>
          <p className="text-xl text-slate-500 font-medium">Valódi sikertörténetek, valódi emberektől.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`break-inside-avoid p-10 rounded-[2.5rem] ${review.color} border border-slate-50 relative group transition-all duration-300`}
            >
              <Quote className="absolute top-8 right-10 text-slate-200 group-hover:text-primary/20 transition-colors" size={48} />
              <p className="text-slate-700 leading-relaxed mb-10 italic font-medium text-lg relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 tracking-tight">{review.name}</h4>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
