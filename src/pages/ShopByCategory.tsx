import { Link } from 'react-router-dom';
import { FadeIn, PageHero } from '../components/Animations';
import { categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function ShopByCategory() {
  return (
    <div>
      <PageHero
        title="Shop by Category"
        subtitle="Exceptional diamonds in every form"
        backgroundImage="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&q=80"
      />

      {/* Categories Grid */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="section-subheading">Explore Our Curated Selection</p>
            <h2 className="section-heading">Categories</h2>
          </FadeIn>

          {/* Large featured categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {categories.slice(0, 2).map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.15}>
                <Link
                  to={`/category/${cat.id}`}
                  className="group relative block aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-tiffany-300 mb-2">
                      {cat.productCount} Pieces
                    </p>
                    <h3 className="font-serif text-3xl md:text-4xl text-ivory-100 font-light tracking-wide mb-3">
                      {cat.name}
                    </h3>
                    <p className="font-sans text-sm text-ivory-200/70 max-w-sm mb-5 hidden md:block">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-sans text-[10px] tracking-ultra-wide uppercase text-ivory-100 group-hover:text-tiffany-300 transition-colors">
                      Explore {cat.name}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Smaller categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(2).map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.1}>
                <Link
                  to={`/category/${cat.id}`}
                  className="group relative block aspect-[3/4] overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent group-hover:from-gray-900/80 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-sans text-[10px] tracking-wider uppercase text-tiffany-300 mb-1">
                      {cat.productCount} Pieces
                    </p>
                    <h3 className="font-serif text-2xl text-ivory-100 font-light tracking-wide mb-3">
                      {cat.name}
                    </h3>
                    <span className="inline-flex items-center gap-2 font-sans text-[10px] tracking-ultra-wide uppercase text-ivory-100 group-hover:text-tiffany-300 transition-colors">
                      Shop Now
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elmara */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h3 className="font-serif text-3xl text-gray-900 font-light mb-6">
              Every Diamond, One Standard: <span className="text-gradient italic">Perfection</span>
            </h3>
            <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Whether you're searching for a flawless solitaire, a dazzling diamond necklace,
              or classic diamond studs, each Elmara stone is GIA-certified and set with the same
              unwavering dedication to brilliance and beauty.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
