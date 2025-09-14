
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Award, Coffee } from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: <Heart className="text-yellow-400" size={32} />,
      title: "Passion-Driven",
      description: "Born from a genuine love for golf and quality coffee, every product reflects our dedication to excellence."
    },
    {
      icon: <Users className="text-yellow-400" size={32} />,
      title: "Community Focused",
      description: "Building connections between golf enthusiasts who appreciate the finer details of their equipment and brew."
    },
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: "Quality First",
      description: "We curate only the finest products that meet our rigorous standards for craftsmanship and performance."
    },
    {
      icon: <Coffee className="text-yellow-400" size={32} />,
      title: "Perfect Pairing",
      description: "Creating the ideal combination of golf precision and coffee perfection for the discerning enthusiast."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where passion for golf meets appreciation for exceptional coffee. 
              Discover the story behind Canada's premier golf and coffee destination.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Small Business, Big Passion</h3>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                GolfCoffee.ca was born from a simple observation: the world's best golfers often start their day with a perfect cup of coffee, 
                and the most memorable rounds are shared over post-game conversations at the clubhouse.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                We recognized that golf enthusiasts who obsess over the perfect swing also appreciate the nuances of a perfectly brewed cup. 
                This realization led us to curate a unique collection that celebrates both passions with equal dedication.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                As a small Canadian business, we're powered by genuine passion rather than corporate mandates. 
                Every product in our collection is personally selected, tested, and approved by fellow golf and coffee enthusiasts 
                who understand that the details matter.
              </p>

              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-white font-semibold italic text-lg">
                  "For golfers who love the details - because excellence in one passion often reflects excellence in another."
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://cdn.abacus.ai/images/dd8a223e-ad98-4d09-9202-17bd062f5853.png"
                  alt="Golfer with Coffee at Sunrise"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-white mb-12">What Drives Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card rounded-xl p-6 text-center hover-lift"
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Experience the Perfect Pairing?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join our community of golf and coffee enthusiasts. Let us help you discover products that match your passion for quality and precision.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 hover:shadow-lg"
              >
                Start Your Journey
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
