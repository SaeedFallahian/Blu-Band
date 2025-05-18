import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Bolu Band - غذای سالم',
  description: 'فروش ترافل خرما با کیفیت بالا و مواد اولیه ارگانیک',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="stylesheet" href="https://vazir-fonts.ir/assets/fonts/Vazir/Vazir.css" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}