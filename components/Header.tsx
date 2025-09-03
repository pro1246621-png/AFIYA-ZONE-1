
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useTranslations } from '../hooks/useTranslations';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { UserIcon } from './icons/UserIcon';

const Header: React.FC = () => {
  const { language, setLanguage, direction } = useLanguage();
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const t = useTranslations();
  const navigate = useNavigate();

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-primary">
              {t.logo}
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {/* This space can be used for nav links if needed */}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-sm rounded-md ${language === 'en' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`px-3 py-1 text-sm rounded-md ${language === 'ar' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                AR
              </button>
            </div>
            
            <Link to="/cart" className="relative text-gray-600 hover:text-primary transition-colors">
              <ShoppingCartIcon />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-light text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="relative">
              {user ? (
                <div className="flex items-center space-x-2">
                  <UserIcon />
                  <span className="text-gray-700 hidden sm:inline">{`${t.welcome}, ${user.name}`}</span>
                   <button onClick={() => { logout(); navigate('/'); }} className="ml-4 text-sm text-gray-500 hover:text-primary">{t.logout}</button>
                </div>
              ) : (
                <Link to="/login" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <UserIcon />
                  <span className="ml-2 hidden sm:inline">{t.login}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
