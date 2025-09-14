
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Coffee, Target } from 'lucide-react';

export default function HeroSection() {
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://thumbs.dreamstime.com/b/golf-course-sunset-green-grass-ball-club-beautiful-over-golden-hour-light-casting-warm-hues-across-sky-filled-354048798.jpg"
            alt="Golf Course at Sunset"
            fill
            className="object-cover parallax"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 hero-gradient opacity-70" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/Screenshot 2025-09-13 182002.png"
            alt="GolfCoffee.ca - The Perfect Pairing"
            width={400}
            height={400}
            className="mx-auto mb-8 rounded-lg shadow-2xl"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair"
        >
          Where Golf Meets <span className="text-gradient">Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Premium golf equipment and artisan coffee gear crafted for enthusiasts who appreciate the finer details
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-12 text-lg"
        >
          <div className="flex items-center space-x-2">
            <Coffee className="text-yellow-400" size={24} />
            <span>☕️🏌️‍♂️ Fuel for fairways & collectors</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="text-yellow-400" size={24} />
            <span>📦 Coffee + golf gear for the obsessed</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={scrollToShop}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
          >
            Explore Our Collection
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:shadow-2xl text-lg"
          >
            Book Appointment
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-gray-300 mb-4">🏠 Small biz powered by big passion ✨ For golfers who love the details</p>
          <ArrowDown className="mx-auto text-yellow-400 animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
