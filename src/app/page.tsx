import { Suspense } from "react";
import { CategoryPromoCards } from "@/components/CategoryPromoCards";
import { CategorySlider } from "@/components/CategorySlider";
import { BestSellingSlider } from "@/components/BestSellingSlider";
import { DiscountDealsSlider } from "@/components/DiscountDealsSlider";
import { HeroSlider } from "@/components/HeroSlider";

function CategorySliderFallback() {
  return (
    <section className="border-b border-zinc-200/70 bg-white py-8 sm:py-10" aria-hidden>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-12 w-40 animate-pulse rounded-lg bg-zinc-200/80" />
      </div>
      <div className="mt-5 flex gap-4 overflow-hidden px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex w-16 shrink-0 flex-col items-center gap-2">
            <div className="size-14 animate-pulse rounded-full bg-zinc-100" />
            <div className="h-6 w-full animate-pulse rounded bg-zinc-100/80" />
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroSliderFallback() {
  return (
    <section
      className="border-b border-zinc-200/70 bg-white py-3 sm:py-4"
      aria-hidden
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="aspect-[2/1] w-full animate-pulse rounded-2xl bg-zinc-200/80 sm:aspect-[24/5] sm:rounded-3xl" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Suspense fallback={<HeroSliderFallback />}>
        <HeroSlider />
      </Suspense>

      <Suspense fallback={<CategorySliderFallback />}>
        <CategorySlider />
      </Suspense>

      <Suspense
        fallback={
          <section
            className="border-b border-zinc-200/70 bg-[var(--background)] py-8 sm:py-10"
            aria-hidden
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="h-48 animate-pulse rounded-3xl bg-zinc-200/60" />
            </div>
          </section>
        }
      >
        <DiscountDealsSlider />
      </Suspense>

      <CategoryPromoCards />

      <Suspense
        fallback={
          <section
            className="border-b border-zinc-200/70 bg-white py-8 sm:py-10"
            aria-hidden
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="h-48 animate-pulse rounded-3xl bg-zinc-200/60" />
            </div>
          </section>
        }
      >
        <BestSellingSlider />
      </Suspense>

    </main>
  );
}
