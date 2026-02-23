import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#007b8a] text-white/70 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8 text-white">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter">Portfolio</span>
            </div>
            <p className="max-w-sm mb-10 leading-relaxed text-sm">
              CreativePeople Digital Agency is a customer-centric digital marketing company. We shape our internet marketing services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#007b8a] transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#007b8a] transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#007b8a] transition-all"><Instagram size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Support Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">24h Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quick Chat</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold">
          <p>Copyright - 2022 CreativePeople</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
