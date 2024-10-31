'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  emailjs.init('fZSQblpprIaKu8X1t');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_c1nfyu3',
        'template_ln0cb1k',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Meet Shah',
        },
        'fZSQblpprIaKu8X1t'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="min-h-screen bg-space/95 py-20 px-4 md:px-8" id="contact">
      <motion.div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-electric">Let's Connect!</h2>
          <p className="text-xl text-cloud/90 mb-8">
            I'm currently open to new opportunities! If you're looking for a passionate ML/Cloud Engineer, let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              href="mailto:hire@meetshahdev.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-electric/20 backdrop-blur-sm text-electric font-medium rounded-lg overflow-hidden transition-all hover:bg-electric/30"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Me
              </span>
            </motion.a>

            <motion.a 
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-electric text-space font-medium rounded-lg overflow-hidden transition-all hover:bg-electric/90"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
                Download Resume
              </span>
            </motion.a>
          </div>
        </div>

        <motion.div 
          className="glass-card p-8 backdrop-blur-md border border-electric/20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-cloud">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-neural/20 text-black placeholder-cloud/80 rounded-lg border border-electric/30 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-cloud">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-neural/20 text-black placeholder-cloud/80 rounded-lg border border-electric/30 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-colors"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-cloud">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={5}
                className="w-full px-4 py-3 bg-neural/20 text-black placeholder-cloud/80 rounded-lg border border-electric/30 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-colors resize-none"
                placeholder="Your message"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 ${
                isSubmitting 
                  ? 'bg-electric/50 cursor-not-allowed' 
                  : 'bg-electric hover:bg-electric/90'
              } text-space`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
