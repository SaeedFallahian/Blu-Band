"use client";
import { useState } from "react";
import styles from "../styles/FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "ترافل خرما برای چه افرادی مناسب است؟",
    answer:
      "ترافل خرما برای دیابتی‌ها، ورزشکاران، و افرادی که به دنبال میان‌وعده سالم هستند، مناسب است.",
  },
  {
    question: "آیا محصولات شما ارگانیک هستند؟",
    answer:
      "بله، تمام محصولات ما با مواد اولیه 100% ارگانیک و بدون مواد شیمیایی تهیه می‌شوند.",
  },
  {
    question: "چگونه می‌توانم سفارش بدهم؟",
    answer:
      'شما می‌توانید از طریق دکمه "سفارش دهید" در بالای صفحه سفارش خود را ثبت کنید.',
  },
  {
    question: "آیا امکان ارسال به سراسر کشور وجود دارد؟",
    answer: "بله، ما امکان ارسال به سراسر ایران را فراهم کرده‌ایم.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2>سوالات متداول</h2>
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
        >
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
            <h3>{item.question}</h3>
            <span className={styles.toggleIcon}>+</span>
          </div>
          <div className={styles.faqAnswer}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}