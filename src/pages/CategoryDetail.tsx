import { useParams, Link } from 'react-router-dom';
import { FadeIn, PageHero } from '../components/Animations';
import ProductCard from '../components/ProductCard';
import { getCategoryById, getProductsByCategory, categories } from '../data/products';
import { ArrowLeft } from 'lucide-react';

export default function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  const category = getCategoryById(id || '');
  const products = getProductsByCategory(id || '');

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">Category Not Found</h2>
          <Link to="/categories" className="btn-primary">Browse Categories</Link>
        </div>
      </div>
    );
  }

  // Related categories
  const related = categories.filter(c => c.id !== id).slice(0, 3);

  return (
    <div>
      <PageHero
        title={category.name}
        subtitle={category.description}
        backgroundImage={category.image}
      />

      <section className="py-20 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <FadeIn className="mb-12">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-gray-400 hover:text-tiffany-500 transition-colors"
            >
              <ArrowLeft size={14} />
              All Categories
            </Link>
          </FadeIn>

          {/* Products */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-gray-400">New pieces arriving soon</p>
              <p className="font-sans text-sm text-gray-400 mt-2">
                Check back or subscribe to our newsletter for updates.
              </p>
            </div>
          )}

          {/* Related Categories */}
          <div className="mt-24">
            <FadeIn className="mb-10">
              <h3 className="font-serif text-3xl text-gray-900 font-light">Explore Other Categories</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((cat, i) => (
                <FadeIn key={cat.id} delay={i * 0.1}>
                  <Link
                    to={`/category/${cat.id}`}
                    className="group relative block aspect-[4/3] overflow-hidden"
                  >
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/50 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="font-serif text-2xl text-ivory-100">{cat.name}</h4>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
