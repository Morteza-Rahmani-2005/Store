const categoryImage = (file: string) => `/دسته بندی/${file}`;

/** هر فایل داخل `public/دسته بندی` — عنوان‌ها بر اساس محتوای تصویر */
export const categories = [
  {
    id: "clothing",
    name: "پوشاک",
    href: "/categories/clothing",
    image: categoryImage(
      "b3d4eaefebe67ab8d849296ea2e7e113cde8094c_1740821988.webp",
    ),
  },
  {
    id: "beauty",
    name: "آرایشی و بهداشتی",
    href: "/categories/beauty",
    image: categoryImage(
      "b196bbdea97f57bfac02dc1666d7401b16ee4bcb_1740821984.webp",
    ),
  },
  {
    id: "tools",
    name: "ابزار و تجهیزات",
    href: "/categories/tools",
    image: categoryImage(
      "fb6303218362cd2c48b40fef5da89ad33a5c04d7_1740821984.webp",
    ),
  },
  {
    id: "health",
    name: "سلامت و مکمل",
    href: "/categories/health",
    image: categoryImage(
      "deb3f514c62761797eb6a49e1559268b8bce3219_1740821984.webp",
    ),
  },
  {
    id: "gift-card",
    name: "کارت هدیه",
    href: "/categories/gift-card",
    image: categoryImage(
      "f35b3eba7de8bf2432fff4f53abfa8cbaa6e71d6_1740821985.webp",
    ),
  },
  {
    id: "jewelry",
    name: "طلا و نقره",
    href: "/categories/jewelry",
    image: categoryImage(
      "78135af4274ad7b7fcdaec7e5912689e5f5db96a_1740821985.webp",
    ),
  },
  {
    id: "home-decor",
    name: "دکور و ظروف",
    href: "/categories/home-decor",
    image: categoryImage(
      "8a042388b93c5116604f35092a1fb35f8f0756be_1740821985.webp",
    ),
  },
  {
    id: "electronics",
    name: "کالای دیجیتال",
    href: "/categories/electrical",
    image: categoryImage(
      "151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1740821986.webp",
    ),
  },
  {
    id: "supermarket",
    name: "سوپرمارکت",
    href: "/categories/supermarket",
    image: categoryImage(
      "7adb0cc6edc18a6d04b9ba3bdd424b1bcce47848_1740821986.webp",
    ),
  },
  {
    id: "books-art",
    name: "کتاب و هنر",
    href: "/categories/books",
    image: categoryImage(
      "0cdf9c404e509371c3177a334be948a7e500419c_1740821987.webp",
    ),
  },
  {
    id: "toys",
    name: "اسباب‌بازی و کودک",
    href: "/categories/toys",
    image: categoryImage(
      "6f5284dccdb280616bbfe58533ecc483de4639af_1740821987.webp",
    ),
  },
  {
    id: "mobile",
    name: "موبایل",
    href: "/categories/mobile",
    image: categoryImage(
      "09a98a13c782e12a245930b4515d243b17734a33_1740821989.webp",
    ),
  },
  {
    id: "sport",
    name: "ورزش و سفر",
    href: "/categories/sport",
    image: categoryImage(
      "4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1740821990.webp",
    ),
  },
  {
    id: "handicrafts",
    name: "صنایع دستی",
    href: "/categories/handicrafts",
    image: categoryImage(
      "9a4dfac524f8a865f9f69e38d5434fa69fe63e3b_1740821990.webp",
    ),
  },
  {
    id: "appliances",
    name: "لوازم خانگی برقی",
    href: "/categories/appliances",
    image: categoryImage(
      "d825f64f509cd5067a9022528c465e8ca705f60d_1740821988.webp",
    ),
  },
  {
    id: "vehicles",
    name: "خودرو و موتور",
    href: "/categories/vehicles",
    image: categoryImage(
      "03552aa1293fec9f43477814ca62afdacdac18e3_1740821990.webp",
    ),
  },
  {
    id: "pets",
    name: "حیوانات خانگی",
    href: "/categories/pets",
    image: categoryImage(
      "6f236efd9caae4d1c3177f37c483aa44c3092b6a_1753614680.webp",
    ),
  },
  {
    id: "laptop",
    name: "لپ‌تاپ و کامپیوتر",
    href: "/categories/laptop",
    image: categoryImage(
      "7cf1fed6dac6bdfd1b888db6bf8f443ea680244b_1748692252.webp",
    ),
  },
] as const;

export const CATEGORY_ICON_SIZE = 600;
