import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingBag, Heart, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Shop',
    path: '#',
    children: [
      { name: 'Shop by Category', path: '/categories' },
      { name: 'Shop by Collection', path: '/collections' },
    ],
  },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setShopDropdownOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory-100/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-ultra-wide text-tiffany-700">
              ELMARA
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setShopDropdownOpen(true)}
                  onMouseLeave={() => setShopDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 font-sans text-[11px] font-medium tracking-ultra-wide uppercase text-gray-700 hover:text-tiffany-500 transition-colors duration-300">
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${shopDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {shopDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-6 py-4 font-sans text-[11px] font-medium tracking-wider uppercase text-gray-600 hover:bg-tiffany-50 hover:text-tiffany-600 transition-all duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-[11px] font-medium tracking-ultra-wide uppercase transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-tiffany-500'
                      : 'text-gray-700 hover:text-tiffany-500'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button className="hidden md:block text-gray-600 hover:text-tiffany-500 transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="hidden md:block text-gray-600 hover:text-tiffany-500 transition-colors">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button className="text-gray-600 hover:text-tiffany-500 transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-tiffany-500 rounded-full text-[9px] text-white flex items-center justify-center font-sans">
                0
              </span>
            </button>
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-ivory-100 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="font-serif text-2xl tracking-ultra-wide text-tiffany-700">ELMARA</h2>
                  <button onClick={() => setMobileOpen(false)}>
                    <X size={24} className="text-gray-600" />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) =>
                    link.children ? (
                      <div key={link.name}>
                        <button
                          onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                          className="flex items-center justify-between w-full py-4 font-sans text-sm tracking-wider uppercase text-gray-700 border-b border-gray-100"
                        >
                          {link.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${shopDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {shopDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  className="block py-3 pl-6 font-sans text-xs tracking-wider uppercase text-gray-500 hover:text-tiffany-500"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`py-4 font-sans text-sm tracking-wider uppercase border-b border-gray-100 ${
                          location.pathname === link.path ? 'text-tiffany-500' : 'text-gray-700'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
