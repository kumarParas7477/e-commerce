
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Target, Gift, Trophy, Star, Calendar } from 'lucide-react';

export default function CollectionsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const collections = [
    {
      id: 1,
      name: "The Morning Ritual Collection",
      description: "Perfect your pre-round routine with premium coffee gear designed for golfers. Includes artisan brewing equipment and golf-themed mugs.",
      image: "https://cdn.abacus.ai/images/7370ad33-6373-4cf4-bc4b-fe9756d4aa2c.png",
      icon: <Coffee className="text-yellow-400" size={24} />,
      items: ["Premium Pour-Over Set", "Golf Course Mugs", "Travel Coffee Kit", "Morning Blend Selection"],
      theme: "Start every round right"
    },
    {
      id: 2,
      name: "The Precision Player Collection",
      description: "Professional-grade golf equipment for serious players who demand excellence. Meticulously selected clubs and accessories.",
      image: "https://thumbs.dreamstime.com/b/glowing-golf-ball-illuminates-night-course-stunning-closeup-nighttime-scene-experience-magic-breathtaking-close-351604145.jpg",
      icon: <Target className="text-yellow-400" size={24} />,
      items: ["Premium Club Set", "Precision Training Aids", "Professional Accessories", "Custom Fitting Service"],
      theme: "Elevate your game"
    },
    {
      id: 3,
      name: "The Collector's Trophy Collection",
      description: "Exclusive memorabilia and championship replicas for the ultimate golf enthusiast. Display pieces that tell your story.",
      image: "/Screenshot 2025-09-13 181936.png",
      icon: <Trophy className="text-yellow-400" size={24} />,
      items: ["Championship Replicas", "Vintage Club Displays", "Signed Memorabilia", "Custom Trophy Cases"],
      theme: "Celebrate your passion"
    },
    {
      id: 4,
      name: "The Perfect Gift Collection",
      description: "Thoughtfully curated gift sets that combine golf and coffee themes. Perfect for the enthusiast who has everything.",
      image: "https://cdn.abacus.ai/images/22b46a02-1ef0-46ea-b51b-307c82b493d1.png",
      icon: <Gift className="text-yellow-400" size={24} />,
      items: ["Golf & Coffee Pairings", "Luxury Gift Boxes", "Custom Engraving", "Seasonal Collections"],
      theme: "Give the perfect pairing"
    },
    {
      id: 5,
      name: "The Luxury Lifestyle Collection",
      description: "Premium accessories that bring golf elegance to daily life. High-end items for the sophisticated enthusiast.",
      image: "https://cdn.mos.cms.futurecdn.net/qLjZyr5AE3FfWH9kTRcw4a.jpg",
      icon: <Star className="text-yellow-400" size={24} />,
      items: ["Luxury Golf Gloves", "Premium Markers", "Elegant Accessories", "Lifestyle Gear"],
      theme: "Live the golf lifestyle"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Curated <span className="text-gradient">Collections</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our thoughtfully assembled collections, each designed around a specific passion or lifestyle. 
              From morning rituals to championship celebrations, find your perfect pairing.
            </p>
          </motion.div>

          {/* Collections Grid */}
          <div className="space-y-16">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Theme Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass-card rounded-lg p-3">
                        <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                          {collection.theme}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center space-x-3">
                    {collection.icon}
                    <h3 className="text-3xl font-bold text-white">{collection.name}</h3>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {collection.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-yellow-400">Featured Items:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {collection.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Calendar size={18} />
                      <span>Book Consultation</span>
                    </button>
                    <button
                      onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:shadow-lg"
                    >
                      View Products
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Custom Collections Available</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Don't see exactly what you're looking for? We specialize in creating custom collections tailored to your specific interests, 
                skill level, and aesthetic preferences. Let us craft the perfect pairing just for you.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-6">
                <span>🎯 Personalized Selection</span>
                <span>📦 Custom Packaging</span>
                <span>⚡ Expert Curation</span>
                <span>🎁 Special Occasions</span>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 hover:shadow-lg"
              >
                Request Custom Collection
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
