import { Shield, Home, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)'
      }}
    >
      {/* Floating Icons Background */}
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Shield className="w-32 h-32 text-white" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 opacity-10"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Home className="w-40 h-40 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-40 opacity-10"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Wrench className="w-28 h-28 text-white" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white mb-6">
              Trusted Home & Safety Services, Anytime.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/90 mb-10 max-w-2xl"
          >
            Professional Guards, Bouncers, Servants, AC Technicians, Electricians and PSOs—available on demand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => onNavigate('booking')}
              className="px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#ffffff', color: '#1d3557' }}
            >
              Book Service
            </button>

            <button
              onClick={() => onNavigate('worker-signup')}
              className="px-8 py-4 rounded-lg border-2 border-white text-white transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1d3557';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Join as Worker
            </button>
          </motion.div>
        </div>
      </div>

      {/* Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}
