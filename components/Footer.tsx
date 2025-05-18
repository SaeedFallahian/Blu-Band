"use client";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const smoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h3>Bolu Band</h3>
        <p>ما در Bolu Band متعهد به ارائه بهترین ترافل خرما با کیفیت عالی هستیم.</p>
      </div>
      <div className={styles.footerSection}>
        <h3>لینک‌های سریع</h3>
        <ul>
          <li>
            <Link href="#home" onClick={() => smoothScroll("home")}>
              خانه
            </Link>
          </li>
          <li>
            <Link href="#products" onClick={() => smoothScroll("products")}>
              محصولات
            </Link>
          </li>
          <li>
            <Link href="#gallery" onClick={() => smoothScroll("gallery")}>
              گالری
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>تماس با ما</h3>
        <p>ایمیل: info@boluband.com</p>
        <p>تلفن: 021-12345678</p>
        <p>آدرس: تهران، خیابان اصلی</p>
      </div>
      <div className={styles.footerSection}>
        <h3>ما را دنبال کنید</h3>
        <div className={styles.socialIcons}>
          <a href="#">📘</a>
          <a href="#">📸</a>
          <a href="#">🐦</a>
        </div>
      </div>
    </footer>
  );
}