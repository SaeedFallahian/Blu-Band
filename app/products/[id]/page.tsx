import { products } from '../../../lib/data';
import Slider from '../../../components/Slider';
import styles from '../../../styles/ProductDetails.module.css';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div>محصول یافت نشد</div>;
  }

  return (
    <section className={`${styles.productDetails} ${styles.odd}`}>
      <div className={styles.detailsText}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className={styles.price}>{product.price.toLocaleString()} تومان</p>
      </div>
      <Slider images={product.imageUrls} sliderId={1} />
    </section>
  );
}