
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useTranslations } from '../hooks/useTranslations';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const t = useTranslations();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <img
          className="w-full h-56 object-cover"
          src={product.images[0]}
          alt={product.name[language]}
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 h-14">
            {product.name[language]}
        </h3>
        <p className="text-primary font-bold text-xl mb-4">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-auto">
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              {t.addToCart}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
