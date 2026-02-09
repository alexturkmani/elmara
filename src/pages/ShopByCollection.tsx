import { Link } from 'react-router-dom';
import { FadeIn, PageHero } from '../components/Animations';
import { collections } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ShopByCollection() {
  return (
    <div>
      <PageHero
        title="Our Collections"
        subtitle="Stories told through precious stones and metals"
        backgroundImage="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&q=80"
      />

      {/* Collections */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-6">
          {collections.map((collection, i) => (
            <FadeIn key={collection.id} className="mb-20 last:mb-0">
              <Link
                to={`/collection/${collection.id}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                {/* Image - alternating sides */}
                <div className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={collection.heroImage}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-10 md:p-16">
                  <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-tiffany-500 font-semibold mb-4">
                    {collection.season}
                  </p>
                  <h3 className="font-serif text-4xl md:text-5xl text-gray-900 font-light tracking-wide mb-3">
                    {collection.name}
                  </h3>
                  <p className="font-serif text-lg text-tiffany-600 italic mb-6">
                    {collection.tagline}
                  </p>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8 max-w-md">
                    {collection.description}
                  </p>
                  <div>
                    <span className="inline-flex items-center gap-3 font-sans text-[11px] tracking-ultra-wide uppercase text-tiffany-500 font-semibold group-hover:gap-4 transition-all duration-300">
                      Explore Collection
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 luxury-gradient" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h3 className="font-serif text-4xl md:text-5xl text-ivory-100 font-light tracking-wide mb-6">
              Can't Find What You're Looking For?
            </h3>
            <p className="font-sans text-sm text-ivory-200/80 leading-relaxed mb-10 max-w-lg mx-auto">
              Our master artisans can create a bespoke piece tailored exclusively to your vision.
              Schedule a private consultation to begin your custom journey.
            </p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-ivory-100 text-tiffany-700 font-sans text-xs font-semibold tracking-ultra-wide uppercase transition-all duration-500 hover:bg-white hover:shadow-lg">
              Book a Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
