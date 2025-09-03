
import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../context/LanguageContext';
import { SearchIcon } from '../components/icons/SearchIcon';

type CategoryFilter = 'all' | 'medical' | 'cosmetics' | 'herbs';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const t = useTranslations();
  const { language, direction } = useLanguage();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const nameMatches = product.name[language].toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatches = category === 'all' || product.category === category;
      return nameMatches && categoryMatches;
    });
  }, [searchTerm, category, language]);
  
  const categories: { key: CategoryFilter; label: string }[] = [
      { key: 'all', label: t.all },
      { key: 'medical', label: t.medical },
      { key: 'cosmetics', label: t.cosmetics },
      { key: 'herbs', label: t.herbs },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
                <label htmlFor="search" className="sr-only">{t.searchPlaceholder}</label>
                <div className="relative">
                    <div className={`absolute inset-y-0 flex items-center ${direction === 'ltr' ? 'left-3' : 'right-3'}`}>
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={t.searchPlaceholder}
                        className={`w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary ${direction === 'ltr' ? 'pl-10' : 'pr-10'}`}
                    />
                </div>
            </div>
            <div>
                 <label htmlFor="category" className="sr-only">{t.filterByCategory}</label>
                 <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as CategoryFilter)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                 >
                    {categories.map(cat => (
                         <option key={cat.key} value={cat.key}>{cat.label}</option>
                    ))}
                 </select>
            </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.allProducts}</h2>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">{t.noProductsFound}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
