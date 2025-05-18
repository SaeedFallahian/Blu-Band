"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";
import styles from "../styles/ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <Image
        src={product.imageUrls[0]}
        alt={product.name}
        width={200}
        height={200}
        className={styles.productImage}
      />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <p className={styles.price}>{product.price.toLocaleString()} تومان</p>
      <Link
        href={`#${product.id}-details`}
        className={styles.btnDetails}
        onClick={() => {
          const section = document.getElementById(`${product.id}-details`);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        جزئیات محصول
      </Link>
    </div>
  );
}