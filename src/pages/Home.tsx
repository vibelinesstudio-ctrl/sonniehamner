import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Heart, ShieldOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#faf9f6]">
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="input_file_0.png" 
            alt="Beach Horizon" 
            className="w-full h-full object-cover opacity-80" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center min-h-full py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-5xl flex flex-col items-center text-center text-white"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold mb-8 text-white/60"
            >
              Dr. Sonnie Hamner
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.95] mb-12 tracking-tighter"
            >
              My Body, <br /> My Mind, <br className="md:hidden" /> & I
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="max-w-2xl mx-auto space-y-10"
            >
              <p className="text-lg md:text-2xl font-serif italic leading-relaxed text-white/80 px-4">
                "Fear is rarely what it looks like. Most of the time, it looks like who we became to stay loved."
              </p>
              
              <div className="w-12 h-px bg-white/20 mx-auto" />
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link
                  to="/about"
                  className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-white text-slate-900 px-12 py-5 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all hover:bg-slate-100 hover:scale-105 active:scale-95"
                >
                  The Story
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-[10px] uppercase tracking-[0.3em] font-bold border border-white/20 px-12 py-5 rounded-full transition-all hover:bg-white hover:text-slate-950 backdrop-blur-sm"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -track-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-bold">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Quote / Mission */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-12 h-px bg-slate-300" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 leading-tight">
            The wound was hidden. <br />
            <span className="text-slate-400 italic">The symptoms were not.</span>
          </h2>
          
          <p className="text-xl text-slate-500 leading-relaxed font-light">
            Behind every struggle—be it anxiety, anger, or addiction—lies a story of adaptation. 
            Dr. Sonnie Hamner explores the price we pay for belonging, and the path to reclaiming the 'I' that retreated in the face of fear.
          </p>
        </div>
      </section>

      {/* Visual Break - Simple Elegant Elements */}
      <section className="bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: ShieldOff, title: "Identity", text: "Uncovering the self beneath the survival mechanisms." },
            { icon: Heart, title: "Healing", text: "Moving beyond fear to authentic authority." },
            { icon: BookOpen, title: "The Work", text: "Forty years of service translated into one powerful manuscript." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border border-slate-50 rounded-2xl bg-[#faf9f6] text-center space-y-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-center text-slate-400">
                <item.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-32 px-6 bg-[#2d3e50] text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-xs uppercase tracking-widest font-bold text-white/40">Manuscript Status</span>
            <h2 className="text-5xl font-serif leading-tight">
              A work of forty years, <br />
              now ready for the light.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              "My Body, My Mind, and I: The Cost of Staying Loved" is a completed work currently seeking 
              representation. This book is a synthesis of decades working with couples, veterans, 
              first responders, and the disenfranchised.
            </p>
            <div className="pt-6">
              <Link 
                to="/contact" 
                className="inline-block border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-slate-950 transition-all font-medium"
              >
                Inquire about representation
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 aspect-[3/4] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center p-12 text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
             <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 mb-4">Draft</p>
                <div className="h-2 w-12 bg-white/20 mx-auto mb-8" />
                <h4 className="text-xl font-serif italic text-white/90">The Cost of Staying Loved</h4>
                <div className="mt-12 h-px w-full bg-white/10" />
                <p className="mt-8 text-[10px] uppercase tracking-widest text-white/30">Sonnie Hamner</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
