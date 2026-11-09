import Image from "next/image";
import Link from "next/link";

const CARD_SIZE = { width: 400, height: 300 } as const;

const promoCards = [
  {
    id: "promo-b1",
    href: "/categories/books",
    image: "/b1.webp",
    alt: "بنر پیشنهاد دسته‌بندی — کتاب و لوازم‌التحریر",
  },
  {
    id: "promo-b2",
    href: "/categories/home-kitchen",
    image: "/b2.webp",
    alt: "بنر پیشنهاد دسته‌بندی — خانه و آشپزخانه",
  },
  {
    id: "promo-b3",
    href: "/categories/toys",
    image: "/b3.webp",
    alt: "بنر پیشنهاد دسته‌بندی — کودک و اسباب‌بازی",
  },
  {
    id: "promo-b4",
    href: "/categories/sport",
    image: "/b4.webp",
    alt: "بنر پیشنهاد دسته‌بندی — ورزش و سفر",
  },
] as const;

export function CategoryPromoCards() {
  return (
    <section
      className="category-promo-cards border-b border-zinc-200/70 bg-white py-8 sm:py-10"
      aria-label="پیشنهاد دسته‌بندی"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {promoCards.map(({ id, href, image, alt }) => (
            <li key={id}>
              <Link
                href={href}
                className="group block overflow-hidden rounded-2xl transition-[transform,box-shadow] hover:shadow-md active:scale-[0.99]"
              >
                <Image
                  src={image}
                  alt={alt}
                  width={CARD_SIZE.width}
                  height={CARD_SIZE.height}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
