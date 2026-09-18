import { motion } from 'motion/react';

export default function References() {
  const brands = ['Zennester', 'Prik & Tik', 'BeautyPlus'];
  // Create a longer list to ensure seamless infinite scroll
  const scrollItems = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <div className="bg-slate-50 py-16 overflow-hidden border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold leading-8 text-slate-500 uppercase tracking-wider mb-10">
          Reeds vertrouwd door
        </h2>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {scrollItems.map((brand, index) => (
              <div 
                key={index} 
                className="mx-8 sm:mx-16 text-2xl sm:text-3xl font-bold flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 cursor-default text-slate-400"
                style={{ 
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: brand === 'Zennester' ? '0.05em' : 'normal',
                  textTransform: brand === 'Prik & Tik' ? 'uppercase' : 'none',
                }}
              >
                {brand === 'Zennester' && (
                  <svg className="w-8 h-8 mr-2 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 15.5l-3-2.5 1-4h4l1 4z" />
                    <path d="M12 15.5v4.5" />
                    <path d="M15 13l4.5 1.5" />
                    <path d="M9 13L4.5 14.5" />
                    <path d="M10 9l-2-4" />
                    <path d="M14 9l2-4" />
                  </svg>
                )}
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
