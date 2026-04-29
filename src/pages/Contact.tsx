import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#faf9f6] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 mb-20"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-normal">
            For inquiries, publishing, <br /> or speaking engagements.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-6"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
              <Mail size={32} strokeWidth={1} />
            </div>
            <h2 className="text-2xl font-serif text-slate-800">Email Inquiries</h2>
            <p className="text-slate-500 font-light text-sm">
              Reach out directly for speaking engagements or literary inquiries.
            </p>
            <a 
              href="mailto:sonniehamner@protonmail.com" 
              className="text-lg text-slate-900 hover:text-slate-500 transition-colors border-b border-slate-200 pb-1"
            >
              sonniehamner@protonmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-6"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
              <MessageSquare size={32} strokeWidth={1} />
            </div>
            <h2 className="text-2xl font-serif text-slate-800">Socials</h2>
            <p className="text-slate-500 font-light text-sm">
              Follow for reflections and updates on the manuscript.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 transition-colors"><Instagram size={20} /></a>
            </div>
          </motion.div>
        </div>

        {/* Minimal Form-like text */}
        <div className="bg-[#2d3e50] text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10 text-center space-y-8">
            <h3 className="text-3xl font-serif leading-tight">
              A deeper conversation <br /> leads to a wider healing.
            </h3>
            <p className="text-white/60 font-light max-w-lg mx-auto">
              Whether you are an agent, an organization, or someone who shares this vision, 
              connecting is the first step toward collaborative impact.
            </p>
            <div className="pt-4">
               <a 
                href="mailto:sonniehamner@protonmail.com"
                className="bg-white text-slate-950 px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-100 transition-all inline-block active:scale-95"
               >
                 Send a message
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
