
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTranslations } from '../hooks/useTranslations';

const CheckoutPage: React.FC = () => {
  const t = useTranslations();
  const navigate = useNavigate();
  const { clearCart, totalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">{t.orderPlaced}</h1>
        <p className="text-gray-600 mb-8">{t.orderPlacedMessage}</p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors"
        >
          {t.continueShopping}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t.checkout}</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">{t.shippingAddress}</h2>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder={t.fullName} className="w-full border-gray-300 rounded-md" required />
            <input type="text" placeholder={t.address} className="w-full border-gray-300 rounded-md" required />
            <input type="text" placeholder={t.city} className="w-full border-gray-300 rounded-md" required />
            <input type="text" placeholder={t.country} className="w-full border-gray-300 rounded-md" required />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">{t.paymentInformation}</h2>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder={t.cardNumber} className="w-full border-gray-300 rounded-md" required />
            <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder={t.expiryDate} className="w-full border-gray-300 rounded-md" required />
                <input type="text" placeholder={t.cvc} className="w-full border-gray-300 rounded-md" required />
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6">
            <div className="flex justify-between items-center text-xl font-bold text-gray-900 mb-6">
                <span>{t.total}</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
            >
            {t.placeOrder}
            </button>
        </div>

      </form>
    </div>
  );
};

export default CheckoutPage;
