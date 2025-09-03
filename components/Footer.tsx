
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Footer: React.FC = () => {
  const t = useTranslations();
  
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} {t.logo}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
