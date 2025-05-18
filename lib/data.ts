import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'classic',
    name: 'ترافل خرما کلاسیک',
    description: 'طعم اصیل و سنتی خرما با ترکیبی از مواد اولیه ارگانیک، مناسب برای میان‌وعده روزانه. این محصول با دقت فراوان تهیه شده و برای افرادی که به دنبال طعم نوستالژیک هستند، ایده‌آل است.',
    shortDescription: 'طعم اصیل و سنتی',
    price: 150000,
    imageUrls: ['/images/classic-1.webp', '/images/classic-2.webp', '/images/classic-3.webp'],
  },
  {
    id: 'chocolate',
    name: 'ترافل خرما شکلاتی',
    description: 'پوشیده از لایه‌ای از شکلات تلخ با کیفیت بالا، ترکیبی از شیرینی خرما و طعم غنی شکلات. این محصول برای دوستداران شکلات و خرما یک انتخاب بی‌نظیر است.',
    shortDescription: 'پوشیده از شکلات تلخ',
    price: 180000,
    imageUrls: ['/images/chocolate-1.webp', '/images/chocolate-2.webp', '/images/chocolate-3.webp'],
  },
  {
    id: 'nutty',
    name: 'ترافل خرما آجیلی',
    description: 'ترکیبی مغذی از خرما و مغزهای تازه مانند بادام و گردو، سرشار از انرژی و پروتئین. این محصول برای ورزشکاران و افرادی که به دنبال میان‌وعده سالم هستند، مناسب است.',
    shortDescription: 'ترکیبی از مغزها',
    price: 200000,
    imageUrls: ['/images/nutty-1.webp', '/images/nutty-2.webp', '/images/nutty-3.webp'],
  },
  {
    id: 'special',
    name: 'ترافل خرما ویژه',
    description: 'بسته‌بندی لوکس با طعم‌های متنوع و تزئینات خاص، مناسب برای هدیه دادن. این محصول با دقت و ظرافت خاصی طراحی شده تا تجربه‌ای متفاوت ارائه دهد.',
    shortDescription: 'بسته‌بندی لوکس',
    price: 250000,
    imageUrls: ['/images/special-1.webp', '/images/special-2.webp', '/images/special-3.webp'],
  },
];