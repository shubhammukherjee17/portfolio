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
      className="py-16 bg-[#030303] overflow-x-hidden"
    >
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-white break-words"
        >
          CONTACT
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-2" />
        </motion.h2>

        <motion.form
          variants={fadeIn}
          onSubmit={handleSubmit}
          className="w-full max-w-md sm:max-w-lg mx-auto space-y-6 bg-[#242424] p-4 sm:p-6 md:p-8 rounded-lg shadow-xl"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-3 py-2 rounded-lg border border-gray-600 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 px-6 bg-blue-700 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-70 text-sm sm:text-base"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
