import Image from 'next/image';
import styles from '../styles/ProductOverview.module.css';

export default function ProductOverview() {
  return (
    <section className={styles.productOverview}>
      <div className={styles.productText}>
        <h2>ترافل خرمای پریمیوم</h2>
        <p>بلو باند اولین برند تولیدکننده ترافل خرما در ایران است.</p>
        <p>محصولات ما دارای نشان سیب سلامت و استاندارد کیفیت هستند.</p>
        <p>میان‌وعده‌ای سالم و مغذی برای دیابتی‌ها، ورزشکاران و علاقه‌مندان به سلامتی.</p>
        <p>ترکیب این محصولات با چای یا قهوه تجربه‌ای لذت‌بخش ارائه می‌دهد.</p>
        <p>همیشه در تلاش برای بهبود از طریق نوآوری و تحقیقات پیشرفته هستیم.</p>
        <p>تعهد به کیفیت، هالیتین را به برندی قابل اعتماد تبدیل کرده است.</p>
      </div>
      <Image
        src="/images/truffle.webp"
        alt="ترافل خرما"
        width={350}
        height={350}
        className={styles.productImage}
      />
    </section>
  );
}