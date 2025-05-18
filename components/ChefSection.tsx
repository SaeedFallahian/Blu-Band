import Image from 'next/image';
import styles from '../styles/ChefSection.module.css';

export default function ChefSection() {
  return (
    <section className={styles.section}>
      <h2>پخته‌شده توسط بهترین سرآشپزها</h2>
      <div className={styles.chef}>
        <p>تجربه‌ای طراحی‌شده برای چشیدن بهترین تابستان از طریق ارتباطی که شما قدردانی می‌کنید</p>
        <ul>
          <li>غذای خوشمزه تضمین‌شده</li>
          <li>پخته‌شده توسط سرآشپزهای حرفه‌ای</li>
        </ul>
        <Image
          src="/images/chef.webp"
          alt="سرآشپز"
          width={120}
          height={120}
          className={styles.chefImage}
        />
      </div>
    </section>
  );
}