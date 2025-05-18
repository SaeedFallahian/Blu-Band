import { products } from '../lib/data';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

export default function ProductList() {
  return (
    <section className={styles.section} id="products">
      <h2>محصولات ما</h2>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}