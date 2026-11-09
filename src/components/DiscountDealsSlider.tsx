"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { discountedProducts } from "@/data/discountedProducts";
import { discountPercent, formatPrice } from "@/lib/formatPrice";

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

function ProductPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <rect
        x="14"
        y="18"
        width="36"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />
      <circle cx="26" cy="30" r="4" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path
        d="M18 42l10-10 6 6 12-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
    </svg>
  );
}

type ProductCardProps = (typeof discountedProducts)[number];

function DiscountProductCard({
  name,
  href,
  price,
  compareAtPrice,
  imageTint,
}: ProductCardProps) {
  const percent = discountPercent(price, compareAtPrice);

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition-[border-color,box-shadow,transform] hover:border-zinc-300 hover:shadow-sm active:scale-[0.99]"
    >
      <div className="relative">
        <div
          className={`flex aspect-square items-center justify-center bg-gradient-to-br ${imageTint} text-[var(--brand-primary)]`}
        >
          <ProductPlaceholder className="h-16 w-16 opacity-60 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14" />
        </div>
        {percent > 0 ? (
          <span className="absolute end-2.5 top-2.5 rounded-lg bg-[var(--brand-accent)] px-2 py-0.5 text-[0.6875rem] font-bold text-white shadow-sm">
            {formatPrice(percent)}٪
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5 sm:p-3.5">
        <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-medium leading-snug text-zinc-800 group-hover:text-zinc-900 sm:min-h-[2.5rem] sm:text-sm">
          {name}
        </h3>
        <div className="mt-auto flex flex-col gap-0.5">
          {compareAtPrice > price ? (
            <span className="text-xs text-zinc-400 line-through sm:text-xs">
              {formatPrice(compareAtPrice)}
            </span>
          ) : null}
          <span className="text-base font-bold text-[var(--brand-primary)] sm:text-base">
            {formatPrice(price)}
            <span className="ms-0.5 text-xs font-medium text-zinc-500 sm:text-xs">
              تومان
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function DiscountDealsSlider() {
  return (
    <section
      className="discount-deals border-b border-zinc-200/70 bg-[var(--background)] py-8 sm:py-10"
      aria-labelledby="discount-deals-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_1px_2px_rgba(20,20,43,0.04)] sm:rounded-3xl">
          <DiscountDealsHeader />
          <div className="border-t border-zinc-100 px-2 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
            <div className="relative -mx-0.5 sm:mx-0">
              <button
                type="button"
                className="discount-deals-prev absolute -start-0.5 top-[calc(50%-1.25rem)] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 shadow-sm transition-colors hover:border-zinc-300 hover:text-[var(--brand-primary)] sm:flex lg:-start-2"
                aria-label="محصول قبلی"
              >
                <ChevronIcon />
              </button>
              <button
                type="button"
                className="discount-deals-next absolute -end-0.5 top-[calc(50%-1.25rem)] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 shadow-sm transition-colors hover:border-zinc-300 hover:text-[var(--brand-primary)] sm:flex lg:-end-2"
                aria-label="محصول بعدی"
              >
                <ChevronIcon className="rotate-180" />
              </button>

              <Swiper
                dir="rtl"
                modules={[Autoplay, Navigation]}
                loop
                loopAdditionalSlides={discountedProducts.length}
                watchSlidesProgress
                grabCursor
                speed={450}
                autoplay={{
                  delay: 3200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: ".discount-deals-prev",
                  nextEl: ".discount-deals-next",
                }}
                slidesPerView="auto"
                spaceBetween={12}
                breakpoints={{
                  640: { spaceBetween: 12 },
                  768: { spaceBetween: 14 },
                  1024: { spaceBetween: 16 },
                }}
                className="discount-deals-swiper !overflow-hidden"
              >
                {discountedProducts.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="!h-auto !w-[min(82%,18.5rem)] sm:!w-[12.75rem] md:!w-[13.25rem] lg:!w-[13.75rem] xl:!w-[14.25rem]"
                  >
                    <DiscountProductCard {...product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscountDealsHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-l from-[var(--brand-primary)]/[0.06] via-white to-white px-4 py-4 sm:px-5 sm:py-5">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-primary)] text-sm font-bold text-white shadow-sm"
          aria-hidden
        >
          %
        </span>
        <div>
          <h2
            id="discount-deals-heading"
            className="text-base font-bold text-zinc-900 sm:text-lg"
          >
            محصولات تخفیف‌دار
          </h2>
          <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
            پیشنهادهای ویژه با بهترین قیمت
          </p>
        </div>
      </div>
      <Link
        href="/offers"
        className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-[var(--brand-primary)]/30 hover:text-[var(--brand-primary)] sm:text-sm"
      >
        مشاهده همه
        <ChevronIcon className="rotate-180 opacity-60" />
      </Link>
    </header>
  );
}
