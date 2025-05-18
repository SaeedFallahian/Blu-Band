import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <Image
        src="/images/hero.webp"
        alt="غذای سالم"
        width={400}
        height={300}
        className={styles.heroImage}
      />
      <div className={styles.heroText}>
        <h1>
          فقط غذای <span>سالم</span> بخورید<br />
          تا زندگی سالم‌تری داشته باشید
        </h1>
        <p>
          با خوردن غذاهای سالم که طعم‌های فوق‌العاده‌ای دارند،<br />
          زندگی سالم‌تری را برای امروز و آینده خود رقم بزنید
        </p>
        <Link href="#" className={styles.btnHero}>اکنون سفارش دهید</Link>
      </div>
    </section>
  );
}