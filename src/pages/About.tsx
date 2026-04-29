import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-3xl shadow-2xl relative">
              <img 
                src="input_file_1.png" 
                alt="Dr. Sonnie Hamner" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-50 border border-slate-100 -z-10 rounded-full" />
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#fdfcfa] border border-slate-100 -z-10 rounded-full" />
          </motion.div>

          {/* Text Side */}
          <div className="space-y-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400 block mb-6">About the Author</span>
              <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
                Dr. Sonnie <br /> Hamner
              </h1>
            </div>

            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Dr. Sonnie Hamner is a licensed Marriage and Family Therapist and minister with more than forty years of service. Her work has included the homeless, the disenfranchised, couples, first responders, veterans, business leaders, and incarcerated populations.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Across these very different lives, one truth appeared again and again: the wounded heart. Beneath anxiety, anger, addiction, depression, control, and relational pain, there was often a deeper unseen wound carried quietly for years—the fire beneath the storm.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pl-8 border-l border-slate-200 py-4 italic text-2xl text-slate-400 font-serif"
              >
                "Healing begins when fear no longer holds authority."
              </motion.div>
            </div>
          </div>
        </div>

        {/* Extended Section */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif text-slate-800">The Mission</h3>
            <p className="text-slate-500 leading-relaxed font-light">
              Sonnie's conviction is that true healing requires more than symptom management. It requires a brave look at who we became to survive, and a gentle invitation for the authentic self to return from exile.
            </p>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-serif text-slate-800">The Work</h3>
            <p className="text-slate-500 leading-relaxed font-light">
              Her latest manuscript, *My Body, My Mind, and I: The Cost of Staying Loved*, is the culmination of these decades of observation. It provides a roadmap for those feeling the weight of 'survival' and seeking the freedom of 'being'.
            </p>
          </div>
        </div>
        
        {/* Simple visual separator */}
        <div className="mt-40 h-px w-full bg-slate-100" />
      </div>
    </div>
  );
}
