import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-2xl font-serif">Sonnie Hamner</h3>
          <p className="text-slate-400 font-light text-sm max-w-xs mx-auto md:mx-0">
            Author | Therapist | Minister <br />
            Exploring the hidden wounds and the journey back to self.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold">Connect</h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-slate-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-slate-400 transition-colors"><Instagram size={20} /></a>
            <a href="mailto:sonniehamner@protonmail.com" className="hover:text-slate-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold">Status</h4>
          <p className="text-slate-400 text-sm italic">
            Manuscript completed. Currently seeking representation.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-tighter text-slate-600">
        <p>&copy; 2026 Sonnie Hamner. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Refined by AI Studio</p>
      </div>
    </footer>
  );
}
