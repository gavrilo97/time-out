"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import s from "./Carousel.module.css";

const Carousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  if (!slides?.length) return null;

  return (
    <div className={s.viewport} ref={emblaRef}>
      <div className={s.container}>
        {slides.map((slide, index) => (
          <div className={s.slide} key={slide.name}>
            <Link
              href={slide.href}
              target="_blank"
              rel="noopener noreferrer"
              className={s.slideLink}
              aria-label={slide.name}
            >
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="(max-width: 960px) 100vw, 1320px"
                className="object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
