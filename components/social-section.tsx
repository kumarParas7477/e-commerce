
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Music, ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function SocialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const socialPosts = [
    {
      platform: 'Instagram',
      icon: <Instagram className="text-pink-400" size={20} />,
      content: "Just brewed the perfect cup before my morning round! ☕️🏌️‍♂️ #GolfCoffee #MorningRitual",
      engagement: "127 likes, 15 comments",
      time: "2 hours ago"
    },
    {
      platform: 'Instagram',
      icon: <Instagram className="text-pink-400" size={20} />,
      content: "New collection drop! Premium coffee mugs that are perfect for the 19th hole 🏆",
      engagement: "89 likes, 8 comments",
      time: "1 day ago"
    },
    {
      platform: 'TikTok',
      icon: <Music className="text-red-400" size={20} />,
      content: "POV: You're a golfer who takes their coffee as seriously as their swing ⛳️",
      engagement: "1.2K views, 45 likes",
      time: "3 days ago"
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

  const handleSocialClick = (platform: string) => {
    if (platform === 'Instagram') {
      window.open('https://www.instagram.com/golfcoffee.ca/', '_blank');
    } else if (platform === 'TikTok') {
      window.open('https://www.tiktok.com/@golfcoffee.ca?_t=8nAgp1wG3oU&_r=1', '_blank');
    }
  };

  return (
    <section id="social" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Join Our <span className="text-gradient">Community</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Follow our journey and connect with fellow golf and coffee enthusiasts. 
              Share your perfect pairings and discover inspiration for your next round.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-8 mb-16">
            <button
              onClick={() => handleSocialClick('Instagram')}
              className="group flex items-center space-x-3 glass-card rounded-xl p-6 hover-lift transition-all duration-300 hover:bg-pink-500/10"
            >
              <Instagram className="text-pink-400 group-hover:text-pink-300" size={32} />
              <div className="text-left">
                <p className="text-white font-bold">Instagram</p>
                <p className="text-gray-400 text-sm">@golfcoffee.ca</p>
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-pink-300" size={16} />
            </button>

            <button
              onClick={() => handleSocialClick('TikTok')}
              className="group flex items-center space-x-3 glass-card rounded-xl p-6 hover-lift transition-all duration-300 hover:bg-red-500/10"
            >
              <Music className="text-red-400 group-hover:text-red-300" size={32} />
              <div className="text-left">
                <p className="text-white font-bold">TikTok</p>
                <p className="text-gray-400 text-sm">@golfcoffee.ca</p>
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-red-300" size={16} />
            </button>
          </motion.div>

          {/* Recent Posts Feed */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Latest Updates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialPosts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card rounded-xl p-6 hover-lift group cursor-pointer"
                  onClick={() => handleSocialClick(post.platform)}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    {post.icon}
                    <span className="text-white font-medium">{post.platform}</span>
                    <span className="text-gray-400 text-sm ml-auto">{post.time}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-white transition-colors">
                    {post.content}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.engagement}</span>
                    <div className="flex space-x-3">
                      <Heart size={16} className="hover:text-red-400 cursor-pointer" />
                      <MessageCircle size={16} className="hover:text-blue-400 cursor-pointer" />
                      <Share2 size={16} className="hover:text-green-400 cursor-pointer" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Community Stats */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-white">Our Growing Community</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-3xl font-bold text-yellow-400 mb-2">500+</p>
                  <p className="text-gray-300">Instagram Followers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400 mb-2">1.2K</p>
                  <p className="text-gray-300">TikTok Views</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400 mb-2">150+</p>
                  <p className="text-gray-300">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400 mb-2">25+</p>
                  <p className="text-gray-300">Premium Products</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Share Your Story CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Share Your Perfect Pairing</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Tag us in your posts featuring our products! We love seeing how our community enjoys the perfect combination of golf and coffee. 
                Use <span className="text-yellow-400 font-semibold">#GolfCoffeeCA</span> for a chance to be featured.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => handleSocialClick('Instagram')}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
                >
                  <Instagram size={18} />
                  <span>Follow on Instagram</span>
                </button>
                <button
                  onClick={() => handleSocialClick('TikTok')}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
                >
                  <Music size={18} />
                  <span>Follow on TikTok</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
