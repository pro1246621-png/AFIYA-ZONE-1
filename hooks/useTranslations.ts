
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language];
};
