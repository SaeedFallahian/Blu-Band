import { Product } from '../types/product';
import Slider from './Slider';
import styles from '../styles/ProductDetails.module.css';

interface ProductDetailsProps {
  product: Product;
  index: number;
}

export default function ProductDetails({ product, index }: ProductDetailsProps) {
  return (
    <div
      className={`${styles.productDetails} ${index % 2 === 0 ? styles.odd : styles.even}`}
      id={`${product.id}-details`}
    >
      <div className={styles.detailsText}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className={styles.price}>{product.price.toLocaleString()} تومان</p>
      </div>
      <Slider images={product.imageUrls} sliderId={index + 1} />
    </div>
  );
}