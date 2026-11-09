import Image from "next/image";
import Link from "next/link";

const trustItems = [
  {
    title: "ارسال سریع",
    desc: "تحویل در کمترین زمان",
    icon: (
      <path
        d="M13 4 5 8v11h3v-6h10v6h3V8l-8-4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "ضمانت اصالت",
    desc: "کالای ۱۰۰٪ اورجینال",
    icon: (
      <>
        <path d="M12 3 20 7v6c0 4.5-3.2 8.7-8 9.8C7.2 21.7 4 17.5 4 13V7l8-4Z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "پشتیبانی ۲۴/۷",
    desc: "همیشه در کنار شما",
    icon: (
      <>
        <path d="M3 11h2a4 4 0 0 1 4 4v2" />
        <path d="M21 11h-2a4 4 0 0 0-4 4v2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        <path d="M12 17v4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "۷ روز بازگشت",
    desc: "مرجوعی آسان کالا",
    icon: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7" strokeLinecap="round" />
        <path d="M3 4v5h5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
] as const;

const footerLinks = {
  shop: [
    { label: "جدیدترین محصولات", href: "/products/new" },
    { label: "پرفروش‌ها", href: "/bestsellers" },
    { label: "تخفیف‌ها", href: "/offers" },
    { label: "همه دسته‌ها", href: "/categories" },
  ],
  support: [
    { label: "سوالات متداول", href: "/faq" },
    { label: "پیگیری سفارش", href: "/orders/track" },
    { label: "شرایط بازگشت", href: "/returns" },
    { label: "تماس با ما", href: "/contact" },
  ],
  company: [
    { label: "درباره دیجی‌شاپ", href: "/about" },
    { label: "فرصت‌های شغلی", href: "/careers" },
    { label: "قوانین و مقررات", href: "/terms" },
    { label: "حریم خصوصی", href: "/privacy" },
  ],
} as const;

function FooterIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-[var(--brand-accent)]/40 hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200/80" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        پاورقی سایت
      </h2>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {trustItems.map(({ title, desc, icon }) => (
              <li
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-3.5 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                  <FooterIcon>{icon}</FooterIcon>
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900">{title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[var(--foreground)] text-zinc-300">
        <div
          className="pointer-events-none absolute -start-24 top-0 h-64 w-64 rounded-full bg-[var(--brand-primary)]/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -end-16 bottom-0 h-56 w-56 rounded-full bg-[var(--brand-accent)]/15 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block transition-opacity hover:opacity-90">
                <Image
                  src="/digishop-logo-full.svg"
                  alt="دیجی‌شاپ"
                  width={503}
                  height={164}
                  className="h-9 w-auto brightness-0 invert"
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                دیجی‌شاپ؛ خرید آنلاین مطمئن با هزاران کالای متنوع، قیمت رقابتی و
                ارسال به سراسر کشور.
              </p>
              <FooterNewsletter />
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
              <FooterLinkColumn title="فروشگاه" links={footerLinks.shop} />
              <FooterLinkColumn title="پشتیبانی" links={footerLinks.support} />
              <FooterLinkColumn title="دیجی‌شاپ" links={footerLinks.company} />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-2">
              <SocialIcon href="https://instagram.com" label="اینستاگرام">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://t.me" label="تلگرام">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M21.5 4.5 2.8 11.2c-.9.4-.9.9-.2 1.1l4.7 1.5 1.8 5.5c.2.6.5.7.8.7.3 0 .5-.1.8-.5l2.7-2.6 4.3 3.2c.8.6 1.3.3 1.5-.9l2.8-13.6c.3-1.3-.5-1.9-1.6-1.4Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://x.com" label="ایکس">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.3 4H20l-6.5 7.4L21 20h-5.6l-4.4-5.7L6 20H3.3l7-8L3 4h5.7l4 5.3L17.3 4Z" />
                </svg>
              </SocialIcon>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
              <span className="rounded-lg border border-white/10 px-3 py-2">
                نماد اعتماد الکترونیک
              </span>
              <span className="rounded-lg border border-white/10 px-3 py-2">
                پرداخت امن
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0c0c1a] py-4 text-center text-xs text-zinc-500">
        <p>
          © ۱۴۰۴ دیجی‌شاپ — تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-zinc-400 transition-colors hover:text-[var(--brand-accent)]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterNewsletter() {
  return (
    <form
      className="mt-6 max-w-sm"
      action="#"
      aria-label="عضویت در خبرنامه"
    >
      <p className="text-xs font-medium text-zinc-400">خبرنامه تخفیف‌ها</p>
      <div className="mt-2 flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="ایمیل شما"
          className="h-10 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[var(--brand-primary)]/50 focus:ring-2 focus:ring-[var(--brand-primary)]/20"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-[var(--brand-primary)] px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          عضویت
        </button>
      </div>
    </form>
  );
}
