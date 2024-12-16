'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleFieldBlur = () => {
    setActiveField(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification({ type: null, message: '' });
    }, 5000); // Hide notification after 5 seconds
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://submit-form.com/mcTHcnZ80', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification('success', 'Message sent successfully! I will get back to you soon.');
        clearForm();
        // Only set submitted to true after successful submission
        setTimeout(() => {
          setSubmitted(true);
        }, 2000); // Wait for notification to be visible before showing success screen
      } else {
        showNotification('error', 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification('error', 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden" id="contact">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                  Let's Connect
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Have an idea? Let's bring it to life together.
                </p>
              </div>

              <div className="glass-card p-8 md:p-12 relative">
                {/* Interactive decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute inset-0 transition-opacity duration-500 ${activeField ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-lg"></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative">
                  {/* Notification Toast */}
                  <AnimatePresence>
                    {notification.type && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`absolute -top-16 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg ${
                          notification.type === 'success' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-red-500/20 text-red-300'
                        }`}
                      >
                        {notification.message}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-300 ${
                          activeField === 'name' || formData.name
                            ? '-top-6 text-sm text-accent'
                            : 'top-3 text-gray-400'
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFieldFocus('name')}
                        onBlur={handleFieldBlur}
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg
                                focus:border-accent/50 focus:ring-2 focus:ring-accent/20
                                transition-all duration-300 outline-none text-white"
                      />
                    </motion.div>

                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-300 ${
                          activeField === 'email' || formData.email
                            ? '-top-6 text-sm text-accent'
                            : 'top-3 text-gray-400'
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFieldFocus('email')}
                        onBlur={handleFieldBlur}
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg
                                focus:border-accent/50 focus:ring-2 focus:ring-accent/20
                                transition-all duration-300 outline-none text-white"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 ${
                        activeField === 'message' || formData.message
                          ? '-top-6 text-sm text-accent'
                          : 'top-3 text-gray-400'
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus('message')}
                      onBlur={handleFieldBlur}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg
                              focus:border-accent/50 focus:ring-2 focus:ring-accent/20
                              transition-all duration-300 outline-none text-white resize-none"
                    />
                  </motion.div>

                  <motion.div
                    className="flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative px-8 py-4 rounded-lg font-medium text-lg
                        ${isSubmitting 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-accent text-primary hover:bg-accent/90'
                        } transform transition-all duration-300`}
                    >
                      <span className={`transition-opacity ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                        Send Message
                      </span>
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                        </div>
                      )}
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center"
              >
                <svg
                  className="w-10 h-10 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-400 mb-8">I'll get back to you as soon as possible.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}