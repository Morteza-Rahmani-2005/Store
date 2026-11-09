"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: "hero-1",
    alt: "بنر تبلیغاتی فروشگاه — اسلاید ۱",
    href: "/categories/electrical",
    mobile: "/1a16417ba2ba01d097569fdce4b04d903e9a7bdd_1793804224.webp",
    desktop: "/ce6e4cf2430d69a7e0283e2d3d4e1cca04ab7d8a_1793804224.webp",
  },
  {
    id: "hero-2",
    alt: "بنر تبلیغاتی فروشگاه — اسلاید ۲",
    href: "/categories/clothing",
    mobile: "/566022b6ea659847b705360241ef8919143dd1d2_1793786885.webp",
    desktop: "/d4bbfbeae524ae7a476fb8aad62e0594599ea89c_1793787491.webp",
  },
  {
    id: "hero-3",
    alt: "بنر تبلیغاتی فروشگاه — اسلاید ۳",
    href: "/categories/beauty",
    mobile: "/4c868e6c4c2efbbbaa6c0afafc80ae0d8a342dc4_1793810764.webp",
    desktop: "/9741319f8b561d92bdff951a0b497e3d4830d7b9_1794036083.webp",
  },
] as const;

export function HeroSlider() {
  return (
    <section
      className="hero-slider border-b border-zinc-200/70 bg-white py-3 sm:py-4"
      aria-label="اسلایدر بنر"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-50/80 sm:rounded-3xl">
          <Swiper
            dir="rtl"
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            loop
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "hero-slider-bullet",
              bulletActiveClass: "hero-slider-bullet-active",
            }}
            className="hero-slider-swiper w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <Link
                  href={slide.href}
                  className="relative block aspect-[2/1] w-full sm:aspect-[24/5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
                  aria-label={slide.alt}
                >
                  <Image
                    src={slide.mobile}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="(max-width: 639px) 92vw, 0px"
                    className="object-contain object-center sm:hidden"
                  />
                  <Image
                    src={slide.desktop}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="(max-width: 639px) 0px, 1216px"
                    className="hidden object-contain object-center sm:block"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
