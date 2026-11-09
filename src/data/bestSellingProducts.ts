export type BestSellingProduct = {
  id: string;
  name: string;
  href: string;
  price: number;
  imageTint: string;
  salesLabel: string;
};

/** دادهٔ نمونه — بعداً از API جایگزین می‌شود */
export const bestSellingProducts: BestSellingProduct[] = [
  {
    id: "iphone-case",
    name: "کاور سیلیکونی آیفون ۱۵",
    href: "/products/iphone-case",
    price: 420_000,
    imageTint: "from-slate-100 via-white to-zinc-50",
    salesLabel: "۱٬۲۴۰+ فروش",
  },
  {
    id: "rice-cooker",
    name: "پلوپز دیجیتال ۱.۸ لیتری",
    href: "/products/rice-cooker",
    price: 2_150_000,
    imageTint: "from-amber-50 via-white to-yellow-50",
    salesLabel: "۸۹۰+ فروش",
  },
  {
    id: "perfume",
    name: "عطر مردانه ادوپرفیوم ۱۰۰ml",
    href: "/products/perfume",
    price: 1_780_000,
    imageTint: "from-indigo-50 via-white to-violet-50",
    salesLabel: "۲٬۱۰۰+ فروش",
  },
  {
    id: "power-bank",
    name: "پاوربانک ۲۰۰۰۰ میلی‌آمپر",
    href: "/products/power-bank",
    price: 980_000,
    imageTint: "from-gray-100 via-white to-slate-50",
    salesLabel: "۳٬۴۰۰+ فروش",
  },
  {
    id: "baby-diaper",
    name: "پوشک بچه سایز ۴ بسته ۳۰ تایی",
    href: "/products/baby-diaper",
    price: 650_000,
    imageTint: "from-sky-50 via-white to-blue-50",
    salesLabel: "۵٬۲۰۰+ فروش",
  },
  {
    id: "yoga-mat",
    name: "مت یوگا ضدلغزش ۶ میلی‌متری",
    href: "/products/yoga-mat",
    price: 520_000,
    imageTint: "from-emerald-50 via-white to-teal-50",
    salesLabel: "۶۷۰+ فروش",
  },
  {
    id: "mechanical-keyboard",
    name: "کیبورد مکانیکی گیمینگ",
    href: "/products/mechanical-keyboard",
    price: 3_290_000,
    imageTint: "from-zinc-100 via-white to-neutral-50",
    salesLabel: "۴۱۰+ فروش",
  },
  {
    id: "sunscreen",
    name: "ضدآفتاب SPF50 فاقد چربی",
    href: "/products/sunscreen",
    price: 385_000,
    imageTint: "from-orange-50 via-white to-amber-50",
    salesLabel: "۱٬۸۰۰+ فروش",
  },
];
