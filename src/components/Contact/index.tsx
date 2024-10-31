'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="min-h-screen bg-space py-20 px-4 md:px-8" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-electric text-center">Get in Touch</h2>
        
        <div className="bg-neural/10 p-8 rounded-lg backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-space/50 rounded-lg border border-electric/30 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 bg-space/50 rounded-lg border border-electric/30 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={5}
                className="w-full px-4 py-2 bg-space/50 rounded-lg border border-electric/30 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                isSubmitting 
                  ? 'bg-electric/50 cursor-not-allowed' 
                  : 'bg-electric text-space hover:bg-electric/80'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
