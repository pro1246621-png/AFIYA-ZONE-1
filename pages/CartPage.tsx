
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();
  const { language, direction } = useLanguage();
  const t = useTranslations();
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t.shoppingCart}</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg mb-6">{t.yourCartIsEmpty}</p>
          <Link to="/" className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors">
            {t.continueShopping}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img src={item.product.images[0]} alt={item.product.name[language]} className="w-20 h-20 object-cover rounded-md"/>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.product.name[language]}</h3>
                      <p className="text-gray-500">${item.product.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                     <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value, 10))}
                      className="w-16 text-center border-gray-300 rounded-md"
                    />
                    <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 hover:text-red-700">
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{t.subtotal}</h2>
              <div className="flex justify-between items-center text-2xl font-bold text-gray-900 mb-6">
                <span>{t.total}</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
              >
                {t.proceedToCheckout}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
