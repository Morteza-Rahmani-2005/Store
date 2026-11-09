export type DiscountedProduct = {
  id: string;
  name: string;
  href: string;
  price: number;
  compareAtPrice: number;
  imageTint: string;
};

/** دادهٔ نمونه — بعداً از API جایگزین می‌شود */
export const discountedProducts: DiscountedProduct[] = [
  {
    id: "wireless-headphones",
    name: "هدفون بی‌سیم نویزکنسلینگ",
    href: "/products/wireless-headphones",
    price: 2_890_000,
    compareAtPrice: 4_200_000,
    imageTint: "from-violet-100 via-white to-indigo-50",
  },
  {
    id: "air-fryer",
    name: "سرخ‌کن بدون روغن ۵.۵ لیتری",
    href: "/products/air-fryer",
    price: 3_450_000,
    compareAtPrice: 4_800_000,
    imageTint: "from-amber-50 via-white to-orange-50",
  },
  {
    id: "smart-watch",
    name: "ساعت هوشمند ورزشی",
    href: "/products/smart-watch",
    price: 1_980_000,
    compareAtPrice: 2_650_000,
    imageTint: "from-sky-50 via-white to-blue-50",
  },
  {
    id: "kids-blocks",
    name: "ست لگو آموزشی ۱۲۰ تکه",
    href: "/products/kids-blocks",
    price: 890_000,
    compareAtPrice: 1_250_000,
    imageTint: "from-rose-50 via-white to-pink-50",
  },
  {
    id: "coffee-maker",
    name: "قهوه‌ساز اسpresso خانگی",
    href: "/products/coffee-maker",
    price: 5_200_000,
    compareAtPrice: 6_900_000,
    imageTint: "from-stone-100 via-white to-zinc-50",
  },
  {
    id: "running-shoes",
    name: "کفش دویدن مردانه",
    href: "/products/running-shoes",
    price: 1_650_000,
    compareAtPrice: 2_300_000,
    imageTint: "from-emerald-50 via-white to-teal-50",
  },
  {
    id: "skincare-set",
    name: "ست مراقبت پوست روزانه",
    href: "/products/skincare-set",
    price: 1_120_000,
    compareAtPrice: 1_580_000,
    imageTint: "from-fuchsia-50 via-white to-purple-50",
  },
  {
    id: "bluetooth-speaker",
    name: "اسپیکر بلوتوثی قابل‌حمل",
    href: "/products/bluetooth-speaker",
    price: 1_380_000,
    compareAtPrice: 1_950_000,
    imageTint: "from-cyan-50 via-white to-slate-50",
  },
];
