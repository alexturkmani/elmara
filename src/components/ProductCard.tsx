import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice, Product } from '../data/products';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden bg-ivory-200 aspect-[3/4] mb-4">
          {/* Image */}
          <img
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-3 py-1 bg-tiffany-500 text-white font-sans text-[10px] tracking-wider uppercase">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="px-3 py-1 bg-gold-500 text-white font-sans text-[10px] tracking-wider uppercase">
                Bestseller
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
          >
            <Heart
              size={16}
              className={liked ? 'fill-red-400 text-red-400' : 'text-gray-600'}
            />
          </button>

          {/* Quick View */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="bg-tiffany-500/95 backdrop-blur-sm text-center py-3">
              <span className="font-sans text-[10px] tracking-ultra-wide uppercase text-white font-semibold">
                Quick View
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <p className="font-sans text-[10px] tracking-wider uppercase text-tiffany-500 mb-1">
            {product.material}
          </p>
          <h3 className="font-serif text-lg text-gray-900 mb-1 group-hover:text-tiffany-600 transition-colors">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-gray-600 font-medium">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
