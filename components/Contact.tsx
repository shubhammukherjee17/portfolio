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
      className="py-20 bg-gradient-to-br from-[#0f172a] via-[#18181b] to-[#23272f] min-h-[100vh] flex items-center"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-10 tracking-tight drop-shadow-xl text-white"
        >
          <span className="inline-block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
            CONTACT
          </span>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 mx-auto mt-3 rounded-full shadow-lg"></div>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto space-y-7 bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center"
          style={{ boxShadow: '0 8px 32px 0 rgba(37,99,235,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.10)' }}
        >
          <div className="w-full">
            <label htmlFor="name" className="block text-base font-medium text-gray-200 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-700 text-white bg-[#18181b]/80 focus:outline-none focus:ring-2 focus:ring-blue-400/60 text-base transition-all placeholder-gray-400"
              placeholder="Your Name"
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block text-base font-medium text-gray-200 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-700 text-white bg-[#18181b]/80 focus:outline-none focus:ring-2 focus:ring-blue-400/60 text-base transition-all placeholder-gray-400"
              placeholder="you@email.com"
            />
          </div>

          <div className="w-full">
            <label htmlFor="message" className="block text-base font-medium text-gray-200 mb-2">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-700 text-white bg-[#18181b]/80 focus:outline-none focus:ring-2 focus:ring-blue-400/60 text-base transition-all resize-none placeholder-gray-400"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-xl font-semibold text-base shadow-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
