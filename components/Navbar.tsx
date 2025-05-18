"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const smoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Bolu Band</div>
      <button className={styles.navToggle} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ""}`}>
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
        <li>
          <Link href="#about">درباره ما</Link>
        </li>
        <li>
          <Link href="#contact">تماس</Link>
        </li>
      </ul>
      <div className={styles.actions}>
        <Link href="/cart" className={styles.cartIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </Link>
        <Link href="#" className={styles.btnOrder}>
          سفارش دهید
        </Link>
      </div>
    </nav>
  );
}