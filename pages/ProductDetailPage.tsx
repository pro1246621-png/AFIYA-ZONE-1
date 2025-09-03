
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useTranslations } from '../hooks/useTranslations';
import ProductImageSlider from '../components/ProductImageSlider';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [addedMessage, setAddedMessage] = useState(false);
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const t = useTranslations();

  useEffect(() => {
    const foundProduct = products.find(p => p.id.toString() === id);
    setProduct(foundProduct || null);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setAddedMessage(true);
      setTimeout(() => setAddedMessage(false), 2000);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="w-full">
          <ProductImageSlider images={product.images} />
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name[language]}</h1>
          <p className="text-primary font-bold text-3xl mb-6">${product.price.toFixed(2)}</p>
          
          <div className="prose max-w-none text-gray-600 mb-6">
            <p>{product.description[language]}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{t.usage}</h2>
            <p className="text-gray-600">{product.usage[language]}</p>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-full sm:w-auto bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
          >
            {addedMessage ? t.addedToCart : t.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
