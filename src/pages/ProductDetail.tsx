import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, SlideIn } from '../components/Animations';
import ProductCard from '../components/ProductCard';
import {
  getProductById,
  getProductsByCollection,
  getCollectionById,
  formatPrice,
} from '../data/products';
import { ArrowLeft, Heart, ShoppingBag, Shield, Truck, RotateCcw, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/categories" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.hoverImage];
  const collection = getCollectionById(product.collection);
  const relatedProducts = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24 pb-20 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <FadeIn className="mb-8">
          <div className="flex items-center gap-2 font-sans text-xs tracking-wider text-gray-400">
            <Link to="/" className="hover:text-tiffany-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to={`/category/${product.category}`} className="hover:text-tiffany-500 transition-colors capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-600">{product.name}</span>
          </div>
        </FadeIn>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <SlideIn>
            <div className="space-y-4">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-[3/4] bg-ivory-200 overflow-hidden"
              >
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-tiffany-500' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </SlideIn>

          {/* Product Info */}
          <FadeIn delay={0.2}>
            <div className="lg:sticky lg:top-32">
              {collection && (
                <Link
                  to={`/collection/${collection.id}`}
                  className="font-sans text-[10px] tracking-ultra-wide uppercase text-tiffany-500 font-semibold hover:text-tiffany-700 transition-colors"
                >
                  {collection.name} Collection
                </Link>
              )}
              <h1 className="font-serif text-4xl md:text-5xl text-gray-900 font-light tracking-wide mt-2 mb-2">
                {product.name}
              </h1>
              <p className="font-sans text-sm text-gray-400 mb-6">{product.material}</p>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                ))}
                <span className="font-sans text-xs text-gray-400 ml-2">(47 reviews)</span>
              </div>

              <p className="font-serif text-3xl text-gray-900 mb-8">
                {formatPrice(product.price)}
              </p>

              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Details */}
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-gray-900 font-semibold mb-4">
                  Product Details
                </h4>
                <ul className="space-y-2">
                  {product.details.map((detail) => (
                    <li key={detail} className="font-sans text-sm text-gray-500 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-tiffany-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 btn-primary flex items-center justify-center gap-3">
                  <ShoppingBag size={16} />
                  Add to Bag
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`w-14 h-14 border flex items-center justify-center transition-all duration-300 ${
                    liked
                      ? 'bg-red-50 border-red-200 text-red-400'
                      : 'border-gray-200 text-gray-400 hover:border-tiffany-500 hover:text-tiffany-500'
                  }`}
                >
                  <Heart size={18} className={liked ? 'fill-current' : ''} />
                </button>
              </div>

              {/* Shipping info */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Truck, text: 'Free Shipping' },
                  { icon: Shield, text: 'Authenticated' },
                  { icon: RotateCcw, text: '30-Day Returns' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="text-center py-4 border border-gray-100">
                    <Icon size={18} className="mx-auto text-tiffany-500 mb-2" />
                    <p className="font-sans text-[10px] tracking-wider uppercase text-gray-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <FadeIn className="text-center mb-12">
              <p className="section-subheading">You May Also Love</p>
              <h3 className="font-serif text-3xl text-gray-900 font-light">
                From {collection?.name}
              </h3>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
