import { useParams, Link } from 'react-router-dom';
import { FadeIn, PageHero } from '../components/Animations';
import ProductCard from '../components/ProductCard';
import { getCollectionById, getProductsByCollection, collections } from '../data/products';
import { ArrowLeft } from 'lucide-react';

export default function CollectionDetail() {
  const { id } = useParams<{ id: string }>();
  const collection = getCollectionById(id || '');
  const products = getProductsByCollection(id || '');

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">Collection Not Found</h2>
          <Link to="/collections" className="btn-primary">Browse Collections</Link>
        </div>
      </div>
    );
  }

  const related = collections.filter(c => c.id !== id).slice(0, 2);

  return (
    <div>
      <PageHero
        title={collection.name}
        subtitle={collection.tagline}
        backgroundImage={collection.heroImage}
      />

      <section className="py-20 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <FadeIn className="mb-8">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-gray-400 hover:text-tiffany-500 transition-colors"
            >
              <ArrowLeft size={14} />
              All Collections
            </Link>
          </FadeIn>

          {/* Collection Story */}
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-tiffany-500 font-semibold mb-4">
              {collection.season}
            </p>
            <p className="font-sans text-base text-gray-500 leading-relaxed">
              {collection.description}
            </p>
          </FadeIn>

          {/* Products */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-gray-400">Pieces arriving soon</p>
            </div>
          )}

          {/* Other Collections */}
          <div className="mt-24">
            <FadeIn className="text-center mb-10">
              <h3 className="font-serif text-3xl text-gray-900 font-light">More Collections</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((col, i) => (
                <FadeIn key={col.id} delay={i * 0.15}>
                  <Link
                    to={`/collection/${col.id}`}
                    className="group relative block aspect-[16/9] overflow-hidden"
                  >
                    <img src={col.heroImage} alt={col.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/50 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-tiffany-300 mb-2">
                        {col.season}
                      </p>
                      <h4 className="font-serif text-3xl text-ivory-100">{col.name}</h4>
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
