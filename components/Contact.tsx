/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeIn } from '@/utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#030303] to-[#0a0a0a] overflow-x-hidden relative"
    >
      {/* Modern background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          variants={fadeIn}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          GET IN TOUCH
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </motion.h2>

        <motion.form
          variants={fadeIn}
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto space-y-8 backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-400"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 text-sm font-medium tracking-wide"
          >
            {status === 'sending' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : 'Send Message'}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-center mt-4"
            >
              Message sent successfully!
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-center mt-4"
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
