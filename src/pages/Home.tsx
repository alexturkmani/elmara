import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Diamond, Award, Globe, Sparkles } from 'lucide-react';
import { FadeIn, ScaleIn } from '../components/Animations';
import ProductCard from '../components/ProductCard';
import { collections, categories, getFeaturedProducts, formatPrice } from '../data/products';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&q=80)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/70" />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-xs tracking-super-wide uppercase text-tiffany-300 mb-6"
          >
            Luxury Diamond House — Est. 1987
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-ivory-100 font-light tracking-wide mb-6"
          >
            ELMARA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-serif text-xl md:text-2xl text-ivory-200/90 italic font-light max-w-2xl mb-10"
          >
            Where every diamond tells a story of forever
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/collections" className="btn-primary">
              Explore Collections
            </Link>
            <Link to="/categories" className="btn-outline border-ivory-100 text-ivory-100 hover:bg-ivory-100 hover:text-gray-900">
              Shop Now
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[1px] h-12 bg-gradient-to-b from-transparent via-tiffany-300 to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Promise Bar */}
      <section className="bg-tiffany-500 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: Diamond, text: 'GIA Certified Diamonds' },
            { icon: Award, text: 'Lifetime Warranty' },
            { icon: Globe, text: 'Worldwide Shipping' },
            { icon: Sparkles, text: 'Custom Diamond Settings' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-ivory-100">
              <Icon size={16} strokeWidth={1.5} />
              <span className="font-sans text-[10px] tracking-wider uppercase font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 md:py-32 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="section-subheading">Discover</p>
            <h2 className="section-heading">Diamond Collections</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.slice(0, 3).map((collection, i) => (
              <FadeIn key={collection.id} delay={i * 0.15}>
                <Link
                  to={`/collection/${collection.id}`}
                  className="group relative block aspect-[3/4] overflow-hidden"
                >
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-tiffany-300 mb-2">
                      {collection.season}
                    </p>
                    <h3 className="font-serif text-3xl text-ivory-100 font-light mb-2">
                      {collection.name}
                    </h3>
                    <p className="font-serif text-sm text-ivory-200/70 italic mb-4">
                      {collection.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 font-sans text-[10px] tracking-ultra-wide uppercase text-ivory-100 group-hover:text-tiffany-300 transition-colors">
                      Discover <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link to="/collections" className="btn-outline">
              View All Collections
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="section-subheading">Curated for You</p>
            <h2 className="section-heading">Featured Diamonds</h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-24 md:py-32 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="section-subheading">Browse</p>
            <h2 className="section-heading">Shop by Category</h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.1}>
                <Link
                  to={`/category/${cat.id}`}
                  className="group relative block aspect-square overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/50 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="font-serif text-2xl md:text-3xl text-ivory-100 font-light tracking-wide">
                      {cat.name}
                    </h3>
                    <p className="font-sans text-[10px] tracking-wider uppercase text-ivory-200/70 mt-1">
                      {cat.productCount} Pieces
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Banner */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="section-subheading text-tiffany-300">Since 1987</p>
            <h2 className="font-serif text-4xl md:text-6xl text-ivory-100 font-light tracking-wide mb-8">
              The Art of Craftsmanship
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
              Each Elmara diamond is hand-selected from the top 1% of the world's finest stones, then set by our master artisans
              over 120 meticulous hours. From rough stone to radiant masterpiece, every facet is perfected by passion.
            </p>
            <Link to="/about" className="btn-primary">
              Our Story
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScaleIn>
            <div className="w-16 h-[1px] bg-tiffany-500 mx-auto mb-10" />
            <blockquote className="font-serif text-2xl md:text-3xl text-gray-800 font-light italic leading-relaxed mb-8">
              "Wearing Elmara feels like carrying a piece of art. Their Rivière diamond necklace
              has become my most treasured possession — every diamond catches light like a tiny star."
            </blockquote>
            <cite className="not-italic">
              <p className="font-sans text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Sophia Laurent
              </p>
              <p className="font-sans text-xs text-gray-500 mt-1">
                Fashion Editor, Vogue Paris
              </p>
            </cite>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}
