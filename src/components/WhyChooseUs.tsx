import { ShieldCheck, Clock, DollarSign, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Verified Workers',
      description: 'All our service providers are thoroughly verified with background checks and certifications.'
    },
    {
      icon: Clock,
      title: 'Quick Booking',
      description: 'Book services in minutes with our easy-to-use platform. Get instant confirmations.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden charges. Quality service at competitive rates.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#457b9d' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're committed to providing the best service experience with trust and reliability at our core
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div 
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#a8dadc' }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#1d3557' }} />
                </div>
                
                <div>
                  <h3 className="text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
