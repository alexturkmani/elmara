import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-ivory-100 font-light tracking-wide mb-3">
            Join the Elmara World
          </h3>
          <p className="font-sans text-sm text-gray-400 mb-8 max-w-md mx-auto">
              Subscribe for exclusive access to new diamond collections, private viewings, and bespoke offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 text-ivory-100 font-sans text-sm tracking-wider placeholder-gray-500 focus:outline-none focus:border-tiffany-500 transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl tracking-ultra-wide text-tiffany-300 mb-4">ELMARA</h2>
            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
              Timeless diamond luxury crafted for the modern soul. Since 1987, Elmara has been the epitome of fine diamond jewelry.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-tiffany-500 hover:text-tiffany-400 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-ivory-100 mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Shop by Category', path: '/categories' },
                { name: 'Shop by Collection', path: '/collections' },
                { name: 'New Arrivals', path: '/categories' },
                { name: 'Bestsellers', path: '/categories' },
                { name: 'Gift Guide', path: '/categories' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-gray-400 hover:text-tiffany-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-ivory-100 mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Story', path: '/about' },
                { name: 'Craftsmanship', path: '/about' },
                { name: 'Sustainability', path: '/about' },
                { name: 'Careers', path: '/about' },
                { name: 'Press', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-gray-400 hover:text-tiffany-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-ivory-100 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-tiffany-400 mt-1 flex-shrink-0" />
                <span className="font-sans text-sm text-gray-400">
                  742 Fifth Avenue<br />New York, NY 10019
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-tiffany-400 flex-shrink-0" />
                <span className="font-sans text-sm text-gray-400">+1 (212) 555-0188</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-tiffany-400 flex-shrink-0" />
                <span className="font-sans text-sm text-gray-400">contact@elmara.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Elmara. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a key={item} href="#" className="font-sans text-xs text-gray-500 hover:text-tiffany-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
