import Hero from "../components/Hero";
import ProductOverview from "../components/ProductOverview";
import ProductList from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";
import ChefSection from "../components/ChefSection";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import { products } from "../lib/data";
import styles from "../styles/Section.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductOverview />
      <ProductList />
      <section className={styles.section}>
        <h2>جزئیات محصولات</h2>
        {products.map((product, index) => (
          <ProductDetails key={product.id} product={product} index={index} />
        ))}
      </section>
      <ChefSection />
      <Gallery />
      <FAQ />
    </main>
  );
}