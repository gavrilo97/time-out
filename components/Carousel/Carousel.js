/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import s from "./Carousel.module.css";

const Carousel = React.forwardRef(function Carousel(props, ref) {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className={s.embla} ref={ref}>
      <div className={s.embla__viewport} ref={emblaRef}>
        <div className={s.embla__container}>
          {slides.map((slide, index) => (
            <div
              className={`${s.embla__slide} relative block h-64 w-full`}
              key={index}
            >
              <Link href={slide.href} passHref={true} target={"_blank"}>
                <Image
                  className={`${s.embla__slide__img} object-cover`}
                  src={slide.imageSrc.src}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Carousel;
