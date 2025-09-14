
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  appointmentType: string;
}

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    appointmentType: 'consultation'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const createMailtoLink = () => {
    const appointmentTypeLabels = {
      'consultation': 'General Consultation',
      'golf-equipment': 'Golf Equipment Fitting',
      'coffee-tasting': 'Coffee Gear Selection',
      'custom-collection': 'Custom Collection',
      'gift-consultation': 'Gift Consultation'
    };

    const appointmentLabel = appointmentTypeLabels[formData.appointmentType as keyof typeof appointmentTypeLabels];
    
    const emailSubject = formData.subject || `GolfCoffee.ca - ${appointmentLabel} Request`;
    const emailBody = `Hello,

I would like to book an appointment for: ${appointmentLabel}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

Thank you for your time!

Best regards,
${formData.name}`;

    const mailtoUrl = `mailto:amy12608@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    return mailtoUrl;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Open email client with pre-filled data
    window.location.href = createMailtoLink();
  };

  const appointmentTypes = [
    { value: 'consultation', label: 'General Consultation' },
    { value: 'golf-equipment', label: 'Golf Equipment Fitting' },
    { value: 'coffee-tasting', label: 'Coffee Gear Selection' },
    { value: 'custom-collection', label: 'Custom Collection' },
    { value: 'gift-consultation', label: 'Gift Consultation' }
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
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Book Your <span className="text-gradient">Appointment</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discover your perfect pairing? Schedule a personalized consultation where we'll match you 
              with the ideal golf equipment and coffee gear for your lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Calendar className="text-yellow-400" size={24} />
                  <span>Schedule Consultation</span>
                </h3>

                <form onSubmit={handleEmailSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div>
                        <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-300 mb-2">
                          Appointment Type *
                        </label>
                        <select
                          id="appointmentType"
                          name="appointmentType"
                          required
                          value={formData.appointmentType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                        >
                          {appointmentTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                          placeholder="What can we help you with?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 resize-vertical"
                          placeholder="Tell us about your interests, skill level, and what you're looking for..."
                        />
                      </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Mail size={18} />
                    <span>Send Email Inquiry</span>
                    <ExternalLink size={16} />
                  </button>

                  <p className="text-center text-gray-400 text-sm mt-4">
                    This will open your email client with a pre-filled message to amy12608@gmail.com
                  </p>
                </form>

                {/* Alternative Google Forms Option */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-4 text-center">Or Fill Out Our Google Form</h4>
                  <div className="text-center">
                    <a
                      href="https://forms.google.com/create"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg"
                    >
                      <ExternalLink size={18} />
                      <span>Open Google Form</span>
                    </a>
                    <p className="text-gray-400 text-sm mt-2">
                      (You can create a custom Google Form and replace this link)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-yellow-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">amy12608@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-yellow-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-300">Serving golf enthusiasts across Canada</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-yellow-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Book */}
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Book a Consultation?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                    <div>
                      <p className="text-white font-medium">Personalized Selection</p>
                      <p className="text-gray-300 text-sm">We match products to your specific playing style and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                    <div>
                      <p className="text-white font-medium">Expert Guidance</p>
                      <p className="text-gray-300 text-sm">Get insights from fellow golf and coffee enthusiasts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                    <div>
                      <p className="text-white font-medium">Custom Solutions</p>
                      <p className="text-gray-300 text-sm">Special orders and unique combinations available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                    <div>
                      <p className="text-white font-medium">No Pressure</p>
                      <p className="text-gray-300 text-sm">Friendly consultation with no obligation to purchase</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Email Option */}
              <div className="glass-card rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Prefer Email?</h3>
                <p className="text-gray-300 mb-4">
                  You can also reach out to us directly for quick questions or inquiries.
                </p>
                <a
                  href={`mailto:amy12608@gmail.com?subject=GolfCoffee.ca Inquiry&body=Hello, I'm interested in learning more about your products and services.`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:shadow-lg"
                >
                  <Mail size={18} />
                  <span>Email Us Directly</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
