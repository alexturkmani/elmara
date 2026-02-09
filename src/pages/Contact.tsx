import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, PageHero } from '../components/Animations';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&q=80"
      />

      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="section-subheading">Get in Touch</p>
                <h2 className="font-serif text-4xl text-gray-900 font-light mb-6">
                  Visit Our Flagship
                </h2>
                <p className="font-sans text-sm text-gray-500 leading-relaxed mb-10">
                  Whether you're searching for the perfect diamond engagement ring, a bespoke
                  diamond creation, or expert care for your treasured pieces, our diamond
                  concierge team is here to assist.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: 'Address',
                      lines: ['742 Fifth Avenue', 'New York, NY 10019'],
                    },
                    {
                      icon: Phone,
                      title: 'Phone',
                      lines: ['+1 (212) 555-0188', '+1 (212) 555-0199'],
                    },
                    {
                      icon: Mail,
                      title: 'Email',
                      lines: ['contact@elmara.com', 'vip@elmara.com'],
                    },
                    {
                      icon: Clock,
                      title: 'Hours',
                      lines: ['Mon — Sat: 10:00 AM — 8:00 PM', 'Sunday: 12:00 PM — 6:00 PM'],
                    },
                  ].map(({ icon: Icon, title, lines }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-tiffany-50 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon size={18} className="text-tiffany-500" />
                      </div>
                      <div>
                        <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-gray-900 font-semibold mb-1">
                          {title}
                        </h4>
                        {lines.map((line) => (
                          <p key={line} className="font-sans text-sm text-gray-500">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Appointment */}
                <div className="mt-10 p-8 bg-tiffany-500 text-center">
                  <MessageCircle size={24} className="mx-auto text-ivory-100 mb-3" />
                  <h4 className="font-serif text-xl text-ivory-100 mb-2">
                    Book a Private Appointment
                  </h4>
                  <p className="font-sans text-xs text-ivory-200/80 mb-4">
                    Enjoy a personalized consultation in our VIP suite
                  </p>
                  <button className="inline-block px-8 py-3 bg-ivory-100 text-tiffany-700 font-sans text-[10px] font-semibold tracking-ultra-wide uppercase hover:bg-white transition-colors">
                    Schedule Now
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="bg-white p-8 md:p-12 shadow-sm">
                  <h3 className="font-serif text-2xl text-gray-900 font-light mb-2">
                    Send Us a Message
                  </h3>
                  <p className="font-sans text-sm text-gray-400 mb-8">
                    Our team will respond within 24 hours
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-16 h-16 rounded-full bg-tiffany-50 flex items-center justify-center mx-auto mb-6">
                        <Send size={24} className="text-tiffany-500" />
                      </div>
                      <h4 className="font-serif text-2xl text-gray-900 mb-2">Thank You</h4>
                      <p className="font-sans text-sm text-gray-500">
                        Your message has been received. We'll be in touch shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-sans text-[10px] tracking-ultra-wide uppercase text-gray-500 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-5 py-4 bg-ivory-100 border border-gray-200 font-sans text-sm text-gray-900 focus:outline-none focus:border-tiffany-500 transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block font-sans text-[10px] tracking-ultra-wide uppercase text-gray-500 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-5 py-4 bg-ivory-100 border border-gray-200 font-sans text-sm text-gray-900 focus:outline-none focus:border-tiffany-500 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-sans text-[10px] tracking-ultra-wide uppercase text-gray-500 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-5 py-4 bg-ivory-100 border border-gray-200 font-sans text-sm text-gray-900 focus:outline-none focus:border-tiffany-500 transition-colors"
                            placeholder="+1 (___) ___-____"
                          />
                        </div>
                        <div>
                          <label className="block font-sans text-[10px] tracking-ultra-wide uppercase text-gray-500 mb-2">
                            Subject *
                          </label>
                          <select
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-5 py-4 bg-ivory-100 border border-gray-200 font-sans text-sm text-gray-900 focus:outline-none focus:border-tiffany-500 transition-colors appearance-none"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="purchase">Purchase Assistance</option>
                            <option value="bespoke">Bespoke Commission</option>
                            <option value="care">Jewelry Care & Repair</option>
                            <option value="appointment">Schedule Appointment</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block font-sans text-[10px] tracking-ultra-wide uppercase text-gray-500 mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-5 py-4 bg-ivory-100 border border-gray-200 font-sans text-sm text-gray-900 focus:outline-none focus:border-tiffany-500 transition-colors resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
                        <Send size={14} />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={40} className="mx-auto text-tiffany-500 mb-4" />
            <p className="font-serif text-2xl text-gray-800">742 Fifth Avenue, New York</p>
            <p className="font-sans text-xs text-gray-500 mt-2 tracking-wider uppercase">
              Click to open in Google Maps
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
