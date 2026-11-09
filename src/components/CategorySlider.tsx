"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { categories, CATEGORY_ICON_SIZE } from "@/data/categories";

import "swiper/css";
import "swiper/css/navigation";

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function CategoryThumb({ image }: { image: string }) {
  return (
    <span className="relative flex size-[3.75rem] items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_1px_3px_rgba(20,20,43,0.06)] ring-1 ring-zinc-200/70 transition-[box-shadow,ring-color,transform] group-hover:shadow-md group-hover:ring-[var(--brand-primary)]/25 sm:size-[5rem] lg:size-[5.75rem] xl:size-[6.25rem]">
      <Image
        src={image}
        alt=""
        width={CATEGORY_ICON_SIZE}
        height={CATEGORY_ICON_SIZE}
        sizes="(max-width: 640px) 60px, (max-width: 1024px) 80px, 100px"
        className="size-full object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
      />
    </span>
  );
}

export function CategorySlider() {
  return (
    <section
      className="category-slider border-b border-zinc-200/70 bg-white py-6 sm:py-8"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex w-full flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="categories-heading"
              className="text-base font-bold tracking-tight text-zinc-900 sm:text-lg"
            >
              دسته‌بندی‌ها
            </h2>
            <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
              هرچه می‌خواهید، از اینجا پیدا کنید
            </p>
          </div>
          <Link
            href="/categories"
            className="text-xs font-medium text-[var(--brand-primary)] transition-opacity hover:opacity-80 sm:text-sm"
          >
            همه دسته‌ها
          </Link>
        </header>

        <div className="relative mt-5 sm:mt-6">
          <button
            type="button"
            className="category-slider-prev absolute -start-1 top-[2.125rem] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 shadow-sm transition-colors hover:border-zinc-300 hover:text-[var(--brand-primary)] sm:top-[2.5rem] sm:flex lg:top-[2.875rem] lg:-start-3 xl:top-[3.125rem]"
            aria-label="اسلاید قبلی"
          >
            <ChevronIcon />
          </button>
          <button
            type="button"
            className="category-slider-next absolute -end-1 top-[2.125rem] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 shadow-sm transition-colors hover:border-zinc-300 hover:text-[var(--brand-primary)] sm:top-[2.5rem] sm:flex lg:top-[2.875rem] lg:-end-3 xl:top-[3.125rem]"
            aria-label="اسلاید بعدی"
          >
            <ChevronIcon className="rotate-180" />
          </button>

          <Swiper
            dir="rtl"
            modules={[Autoplay, Navigation]}
            loop
            loopAdditionalSlides={categories.length}
            watchSlidesProgress
            grabCursor
            speed={500}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".category-slider-prev",
              nextEl: ".category-slider-next",
            }}
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={4}
            breakpoints={{
              480: { spaceBetween: 8 },
              640: { spaceBetween: 12 },
              1024: { spaceBetween: 16 },
              1280: { spaceBetween: 20 },
            }}
            className="category-slider-swiper !overflow-hidden"
          >
            {categories.map(({ id, name, href, image }) => (
              <SwiperSlide key={id} className="!w-auto">
                <Link
                  href={href}
                  aria-label={name}
                  className="group flex w-[4.75rem] flex-col items-center gap-2 px-0.5 py-1 transition-transform active:scale-[0.97] sm:w-[6.25rem] sm:gap-2.5 lg:w-[7rem] lg:gap-3 xl:w-[7.5rem]"
                >
                  <CategoryThumb image={image} />
                  <span className="line-clamp-2 w-full text-center text-[0.625rem] font-medium leading-snug text-zinc-600 group-hover:text-zinc-900 sm:text-xs lg:text-[0.8125rem]">
                    {name}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
