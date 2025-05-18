import Image from "next/image";
import styles from "../styles/ProductOverview.module.css";

export default function ProductOverview() {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewContent}>
        <div className={styles.textContent}>
          <h2>ترافل خرمای پریمیوم</h2>
          <p>بلو باند اولین برند تولیدکننده ترافل خرما در ایران است.</p>
          <p>محصولات ما دارای نشان سیب سلامت و استاندارد کیفیت هستند.</p>
          <p>
            میان‌وعده‌ای سالم و مغذی برای دیابتی‌ها، ورزشکاران و علاقه‌مندان به
            سلامتی.
          </p>
          <p>ترکیب این محصولات با چای یا قهوه تجربه‌ای لذت‌بخش ارائه می‌دهد.</p>
          <p>همیشه در تلاش برای بهبود از طریق نوآوری و تحقیقات پیشرفته هستیم.</p>
          <p>تعهد به کیفیت، هالیتین را به برندی قابل اعتماد تبدیل کرده است.</p>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.leftImages}>
            <Image
              src="/images/classic-1.webp"
              alt="ترافل خرما کلاسیک"
              width={200}
              height={150}
              className={styles.overviewImage}
            />
            <Image
              src="/images/chocolate-1.webp"
              alt="ترافل خرما شکلاتی"
              width={200}
              height={150}
              className={styles.overviewImage}
            />
          </div>
          <div className={styles.rightImage}>
            <Image
              src="/images/nutty-1.webp"
              alt="ترافل خرما آجیلی"
              width={300}
              height={300}
              className={styles.overviewImageRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}