import { motion } from "motion/react";
import { Users, Video, Briefcase } from "lucide-react";

export default function TrustGrid() {
  const items = [
    {
      icon: <Users className="text-primary" size={32} />,
      bgColor: "bg-primary/10",
      title: "Iparági szakemberek",
      desc: "Nem csak tanárok, hanem aktív grafikusok oktatnak, akik ismerik a piaci igényeket."
    },
    {
      icon: <Video className="text-primary" size={32} />,
      bgColor: "bg-secondary/20",
      title: "Visszanézhető órák",
      desc: "Ha lemaradsz, bármikor pótolhatod a videókból a hallgatói fiókodban."
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      bgColor: "bg-accent/10",
      title: "Valós projektek",
      desc: "Élő munkákon keresztül építed a portfóliódat, amit azonnal mutathatsz az ügyfeleknek."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-dots opacity-20 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Miért minket válassz?</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Miért a Grafikus Akadémia a legbiztonságosabb választás a váltáshoz?</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -12, rotate: i % 2 === 0 ? 1 : -1 }}
              className="p-10 rounded-[2rem] bg-white border border-slate-50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group"
            >
              <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
