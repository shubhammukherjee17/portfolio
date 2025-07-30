"use client"

import React, { useState } from 'react'
import { MinimalCard } from '../ui/minimal-card'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'
import WrapButton from '../ui/wrap-button'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
    
    // You can integrate with your preferred form handling service here
    alert('Message sent successfully! I\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: <Mail className="size-5 text-blue-500" />,
      label: "Email",
      value: "mukherjeeshubham18@gmail.com",
      href: "mailto:mukherjeeshubham18@gmail.com"
    },
    {
      icon: <Phone className="size-5 text-green-500" />,
      label: "Phone",
      value: "+91 70672 94951",
      href: "tel:+917067294951"
    },
    {
      icon: <MapPin className="size-5 text-red-500" />,
      label: "Location",
      value: "Murshidabad, India",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="size-5" />,
      name: "GitHub",
      href: "https://github.com/shubhammukherjee17",
      color: "hover:text-gray-800"
    },
    {
      icon: <Linkedin className="size-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/theshubhammukherjee",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="size-5" />,
      name: "Twitter",
      href: "https://twitter.com/ItsShubhamDev",
      color: "hover:text-blue-400"
    },
    {
      icon: <MessageCircle className="size-5" />,
      name: "WhatsApp",
      href: "https://wa.me/917067294951",
      color: "hover:text-green-500"
    }
  ]

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/80 dark:text-white/90 mb-3 sm:mb-4 animate-slide-up">Get In Touch</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/60 dark:text-white/70 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto animate-fade-in px-4 sm:px-0">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black/80 dark:text-white/90 mb-3 sm:mb-4 md:mb-6 animate-slide-up">
                Let&apos;s Connect
              </h3>
              <p className="text-sm sm:text-base text-black/70 dark:text-white/70 mb-6 sm:mb-8 leading-relaxed animate-fade-in">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out 
                through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info) => (
                <MinimalCard 
                  key={info.label}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-black/80 dark:text-white/80 mb-1">
                          {info.label}
                        </h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-black/70 dark:text-white/70">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </MinimalCard>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-black/80 dark:text-white/80 mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <MinimalCard className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-3 bg-green-500 rounded-full animate-pulse" />
                  <h4 className="font-medium text-black/80 dark:text-white/80">
                    Available for Work
                  </h4>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Currently accepting new projects and opportunities. 
                  Typical response time: 24 hours.
                </p>
              </div>
            </MinimalCard>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <MinimalCard className="hover:scale-[1.02] transition-all duration-300">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black/80 dark:text-white/80 mb-4 sm:mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white transition-colors"
                      placeholder="Project Discussion / Job Opportunity / etc."
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-black/70 dark:text-white/70 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#151515] dark:bg-gray-700 text-white rounded-full border border-[#3B3A3A] dark:border-gray-600 hover:bg-[#ff3f17] dark:hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium hover:scale-105 hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin size-4 border-2 border-current border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </MinimalCard>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-black/60 dark:text-white/60 mb-6">
            Prefer a quick chat? Choose your preferred method:
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <WrapButton 
              href="mailto:mukherjeeshubham18@gmail.com"
              className="px-6 py-3"
            >
              <Mail className="size-4" />
              Email Me
            </WrapButton>
            <WrapButton 
              href="https://calendly.com"
              className="px-6 py-3 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <MessageCircle className="size-4" />
              Schedule a Call
            </WrapButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
