
'use client';

import Image from 'next/image';
import { Instagram, Music, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    if (platform === 'Instagram') {
      window.open('https://www.instagram.com/golfcoffee.ca/', '_blank');
    } else if (platform === 'TikTok') {
      window.open('https://www.tiktok.com/@golfcoffee.ca?_t=8nAgp1wG3oU&_r=1', '_blank');
    }
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/Screenshot 2025-09-13 181837.png"
                  alt="GolfCoffee.ca"
                  fill
                  className="rounded-full"
                />
              </div>
              <span className="text-2xl font-bold text-white">GolfCoffee.ca</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Where golf meets excellence. Premium equipment and artisan coffee gear for enthusiasts who appreciate the finer details.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>☕️🏌️‍♂️ Fuel for fairways & collectors</p>
              <p>📦 Coffee + golf gear for the obsessed</p>
              <p>🏠 Small biz powered by big passion</p>
              <p>✨ For golfers who love the details</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('shop')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Shop Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('collections')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
                <span>@golfcoffee.ca</span>
                <ExternalLink size={14} />
              </button>
              <button
                onClick={() => handleSocialClick('TikTok')}
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
              >
                <Music size={18} />
                <span>@golfcoffee.ca</span>
                <ExternalLink size={14} />
              </button>
              <a
                href="mailto:amy12608@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Mail size={18} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} GolfCoffee.ca - The Perfect Pairing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
