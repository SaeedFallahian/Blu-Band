"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Slider.module.css";

interface SliderProps {
  images: string[];
  sliderId: number;
}

export default function Slider({ images, sliderId }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => {
    console.log(`Next button clicked! Current: ${current}, Next: ${(current + 1) % total}`); // دیباگ
    setCurrent((current + 1) % total);
  };

  const prevSlide = () => {
    console.log(`Previous button clicked! Current: ${current}, Previous: ${(current - 1 + total) % total}`); // دیباگ
    setCurrent((current - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    console.log(`Preview clicked! Go to slide: ${index}, Total: ${total}`); // دیباگ
    setCurrent(index);
  };

  if (!images || images.length === 0) {
    return <div>تصویری برای نمایش وجود ندارد</div>;
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} id={`slider${sliderId}`}>
        <div className={styles.slides}>
          {images.map((src, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === current ? styles.active : ""}`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={400}
                height={300}
                className={styles.slideImage}
                priority={index === 0}
                onError={() => console.error(`Failed to load main image: ${src}`)}
                onLoad={() => console.log(`Loaded main image: ${src}`)}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ❯
      </button>
      <div className={styles.preview} id={`preview${sliderId}`}>
        {images.map((src, index) => (
          <div key={index} className={styles.previewSlide}>
            <Image
              src={src}
              alt={`Preview ${index + 1}`}
              width={60}
              height={60}
              className={`${styles.previewImage} ${
                index === current ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
              onError={() => console.error(`Failed to load preview image: ${src}`)}
              onLoad={() => console.log(`Loaded preview image: ${src}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}