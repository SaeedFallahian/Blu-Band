"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Gallery.module.css";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "classic",
    title: "ترافل خرما کلاسیک",
    description: "طعم سنتی و اصیل",
    image: "/images/gallery-1.webp",
    link: "#classic-details",
  },
  {
    id: "chocolate",
    title: "ترافل خرما شکلاتی",
    description: "پوشش شکلات تلخ",
    image: "/images/gallery-2.webp",
    link: "#chocolate-details",
  },
  {
    id: "nutty",
    title: "ترافل خرما آجیلی",
    description: "ترکیب مغزهای مغذی",
    image: "/images/gallery-3.webp",
    link: "#nutty-details",
  },
  {
    id: "special",
    title: "ترافل خرما ویژه",
    description: "بسته‌بندی لوکس",
    image: "/images/gallery-4.webp",
    link: "#special-details",
  },
  {
    id: "fresh",
    title: "محصولات تازه",
    description: "کیفیت تضمین‌شده",
    image: "/images/gallery-5.webp",
    link: "#products",
  },
  {
    id: "snack",
    title: "میان‌وعده سالم",
    description: "برای هر زمان",
    image: "/images/gallery-6.webp",
    link: "#products",
  },
];

export default function Gallery() {
  const smoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.gallerySection} id="gallery">
      <h2>گالری محصولات</h2>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <Image
              src={item.image}
              alt={item.title}
              width={220}
              height={200}
              className={styles.galleryImage}
            />
            <div className={styles.galleryOverlay}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link
                href={item.link}
                className={styles.btnView}
                onClick={() => smoothScroll(item.link.slice(1))}
              >
                مشاهده جزئیات
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}