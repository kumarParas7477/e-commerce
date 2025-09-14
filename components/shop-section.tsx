
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Star, Trophy, Coffee, Gift, Target } from 'lucide-react';

export default function ShopSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      id: 1,
      name: "Born to Golf Coffee Mug",
      description: "Premium speckled ceramic mug with leather-style golf patch. Perfect for morning coffee before your tee time.",
      image: "/Screenshot 2025-09-13 181949.png",
      category: "Coffee Gear",
      icon: <Coffee className="text-yellow-400" size={20} />,
    },
    {
      id: 2,
      name: "Championship Trophy Collection",
      description: "Professional-grade trophy replicas and golf memorabilia for the serious collector.",
      image: "/Screenshot 2025-09-13 181936.png",
      category: "Collectibles",
      icon: <Trophy className="text-yellow-400" size={20} />,
    },
    {
      id: 3,
      name: "Premium Golf Club Set",
      description: "Meticulously crafted golf clubs with precision engineering for the discerning golfer.",
      image: "https://thumbs.dreamstime.com/b/close-up-golf-ball-tee-virtual-golf-machine-golf-simulator-dramatic-close-up-shot-golf-ball-perched-tee-333609857.jpg",
      category: "Golf Equipment",
      icon: <Target className="text-yellow-400" size={20} />,
    },
    {
      id: 4,
      name: "Luxury Golf Accessories",
      description: "High-end gloves, markers, and accessories that complement your game with style.",
      image: "https://cdn.mos.cms.futurecdn.net/qLjZyr5AE3FfWH9kTRcw4a.jpg",
      category: "Accessories",
      icon: <Star className="text-yellow-400" size={20} />,
    },
    {
      id: 5,
      name: "Artisan Coffee Brewing Set",
      description: "Professional pour-over setup for the perfect cup after a round of golf.",
      image: "https://cdn.abacus.ai/images/7370ad33-6373-4cf4-bc4b-fe9756d4aa2c.png",
      category: "Coffee Gear",
      icon: <Coffee className="text-yellow-400" size={20} />,
    },
    {
      id: 6,
      name: "Collector's Gift Sets",
      description: "Curated combinations of golf equipment and coffee gear for the ultimate enthusiast.",
      image: "https://cdn.abacus.ai/images/22b46a02-1ef0-46ea-b51b-307c82b493d1.png",
      category: "Gift Sets",
      icon: <Gift className="text-yellow-400" size={20} />,
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
    <section id="shop" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Our <span className="text-gradient">Premium Collection</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium golf equipment and artisan coffee gear. 
            Each piece is chosen for quality, craftsmanship, and the perfect pairing of your passions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="flex items-center space-x-2 mb-3">
                {product.icon}
                <span className="text-sm font-medium text-yellow-400">{product.category}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                {product.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Why Book an Appointment?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our personalized consultation ensures you get the perfect equipment and accessories tailored to your playing style and preferences. 
              We believe in the personal touch that makes all the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✨ Personal Consultation</span>
              <span>🔧 Custom Fitting</span>
              <span>📦 Curated Selection</span>
              <span>🎯 Expert Recommendations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
