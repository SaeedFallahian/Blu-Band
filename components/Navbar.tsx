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
      <Link href="#" className={styles.btnOrder}>
        سفارش دهید
      </Link>
    </nav>
  );
}