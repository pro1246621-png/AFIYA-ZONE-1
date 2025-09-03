
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    category: 'medical',
    name: {
      en: 'Digital Blood Pressure Monitor',
      ar: 'جهاز قياس ضغط الدم الرقمي',
    },
    description: {
      en: 'An easy-to-use digital monitor for accurate blood pressure readings at home. Features a large LCD display and memory for two users.',
      ar: 'جهاز رقمي سهل الاستخدام لقراءات دقيقة لضغط الدم في المنزل. يتميز بشاشة LCD كبيرة وذاكرة لمستخدمين اثنين.',
    },
    usage: {
      en: 'Wrap the cuff around your upper arm, press the start button, and wait for the reading. Consult the manual for detailed instructions.',
      ar: 'لف الكفة حول أعلى ذراعك، اضغط على زر البدء، وانتظر القراءة. راجع الدليل للحصول على تعليمات مفصلة.',
    },
    price: 45.99,
    images: ['https://picsum.photos/id/3/600/600', 'https://picsum.photos/id/10/600/600'],
  },
  {
    id: 2,
    category: 'cosmetics',
    name: {
      en: 'Organic Argan Oil Serum',
      ar: 'سيروم زيت الأرجان العضوي',
    },
    description: {
      en: '100% pure, cold-pressed organic argan oil. Rich in Vitamin E and essential fatty acids to nourish hair, face, and skin.',
      ar: 'زيت أرجان عضوي نقي 100٪ ومعصور على البارد. غني بفيتامين E والأحماض الدهنية الأساسية لتغذية الشعر والوجه والبشرة.',
    },
    usage: {
      en: 'Apply a few drops to your palm and gently massage into your skin, hair, or nails until fully absorbed.',
      ar: 'ضع بضع قطرات على راحة يدك ودلكها بلطف على بشرتك أو شعرك أو أظافرك حتى تمتص بالكامل.',
    },
    price: 24.50,
    images: ['https://picsum.photos/id/24/600/600', 'https://picsum.photos/id/25/600/600'],
  },
  {
    id: 3,
    category: 'herbs',
    name: {
      en: 'Dried Chamomile Flowers',
      ar: 'زهور البابونج المجففة',
    },
    description: {
      en: 'High-quality dried chamomile flowers, perfect for a calming herbal tea. Known for its relaxing properties.',
      ar: 'زهور بابونج مجففة عالية الجودة، مثالية لشاي أعشاب مهدئ. معروفة بخصائصها المريحة.',
    },
    usage: {
      en: 'Steep one tablespoon of dried flowers in hot water for 5-7 minutes. Strain and enjoy.',
      ar: 'انقع ملعقة كبيرة من الزهور المجففة في ماء ساخن لمدة 5-7 دقائق. قم بالتصفية واستمتع.',
    },
    price: 12.00,
    images: ['https://picsum.photos/id/40/600/600', 'https://picsum.photos/id/41/600/600'],
  },
    {
    id: 4,
    category: 'medical',
    name: {
      en: 'Infrared Forehead Thermometer',
      ar: 'مقياس حرارة الجبين بالأشعة تحت الحمراء',
    },
    description: {
      en: 'Non-contact thermometer for safe and hygienic temperature readings. Provides results in one second.',
      ar: 'مقياس حرارة بدون تلامس لقراءات درجة حرارة آمنة وصحية. يوفر النتائج في ثانية واحدة.',
    },
    usage: {
      en: 'Point the thermometer at the forehead from a distance of 1-5 cm and press the scan button.',
      ar: 'وجه مقياس الحرارة نحو الجبين من مسافة 1-5 سم واضغط على زر المسح.',
    },
    price: 29.99,
    images: ['https://picsum.photos/id/50/600/600', 'https://picsum.photos/id/51/600/600'],
  },
  {
    id: 5,
    category: 'cosmetics',
    name: {
      en: 'Natural Rose Water Toner',
      ar: 'تونر ماء الورد الطبيعي',
    },
    description: {
      en: 'A gentle and refreshing facial toner made from pure distilled rose petals. Helps to balance skin pH and tighten pores.',
      ar: 'تونر وجه لطيف ومنعش مصنوع من بتلات الورد المقطرة النقية. يساعد على موازنة درجة حموضة البشرة وشد المسام.',
    },
    usage: {
      en: 'After cleansing, spritz onto your face or apply with a cotton pad. Can also be used to refresh skin throughout the day.',
      ar: 'بعد التنظيف، رشه على وجهك أو ضعه بقطعة قطن. يمكن استخدامه أيضًا لإنعاش البشرة طوال اليوم.',
    },
    price: 15.75,
    images: ['https://picsum.photos/id/60/600/600', 'https://picsum.photos/id/62/600/600'],
  },
  {
    id: 6,
    category: 'herbs',
    name: {
      en: 'Organic Peppermint Leaves',
      ar: 'أوراق النعناع العضوية',
    },
    description: {
      en: 'Vibrant and aromatic organic peppermint leaves, ideal for tea or as a culinary herb. Aids in digestion and freshens breath.',
      ar: 'أوراق نعناع عضوية زاهية وعطرية، مثالية للشاي أو كعشب للطهي. تساعد في الهضم وتنعش النفس.',
    },
    usage: {
      en: 'Use for brewing tea, or add to salads, desserts, and drinks for a fresh, minty flavor.',
      ar: 'استخدمها لتحضير الشاي، أو أضفها إلى السلطات والحلويات والمشروبات لنكهة نعناع منعشة.',
    },
    price: 9.50,
    images: ['https://picsum.photos/id/75/600/600', 'https://picsum.photos/id/76/600/600'],
  },
];
