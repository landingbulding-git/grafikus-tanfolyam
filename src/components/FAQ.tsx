import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const faqs = [
    {
      q: "Kell-e előképzettség a kezdéshez?",
      a: "Nem, teljesen az alapoktól indulunk. Csak érettségi bizonyítvány és egy nagy adag kreatív kedv szükséges a kezdéshez."
    },
    {
      q: "Mi történik, ha lemaradok egy óráról?",
      a: "Minden órát videóra veszünk, amit a hallgatói fiókodban bármikor visszanézhetsz, így soha nem maradsz le a tananyagról."
    },
    {
      q: "Hogyan működik a részletfizetés?",
      a: "10 havi kamatmentes részletfizetést biztosítunk (havi 37.000 Ft), rejtett költségek nélkül, hogy mindenki számára elérhető legyen a képzés."
    },
    {
      q: "Milyen szoftverekre lesz szükségem?",
      a: "Az Adobe Creative Cloud csomagot használjuk (Photoshop, Illustrator, InDesign). A hallgatóinknak segítünk a kedvezményes licensz beszerzésében."
    }
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
      
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-16">
          <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Segíthetünk?</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Gyakori kérdések</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string; key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-[2rem] border transition-all duration-300 ${isOpen ? 'bg-white border-primary/20 shadow-xl shadow-primary/5' : 'bg-white/50 border-slate-100 hover:border-slate-200'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-10 py-8 flex items-center justify-between text-left outline-none"
      >
        <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-primary' : 'text-slate-900'}`}>{question}</span>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-10 pb-8 text-slate-500 leading-relaxed font-medium text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
