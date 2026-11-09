import Image from "next/image";
import Link from "next/link";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

const searchInputClass =
  "h-11 w-full rounded-full border border-zinc-200 bg-zinc-50/80 pr-11 pl-4 text-sm text-zinc-900 outline-none transition-[border-color,box-shadow,background] placeholder:text-zinc-400 focus:border-[var(--brand-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--brand-primary)]/15";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center gap-3 px-4 sm:gap-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative flex shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="دیجی‌شاپ — صفحه اصلی"
        >
          <Image
            src="/digishop-logo-full.svg"
            alt="دیجی‌شاپ"
            width={503}
            height={164}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <div className="hidden min-w-0 flex-1 sm:block" role="search">
          <label className="sr-only" htmlFor="navbar-search">
            جستجو
          </label>
          <div className="relative mx-auto max-w-xl">
            <SearchIcon className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              id="navbar-search"
              type="search"
              name="q"
              placeholder="جستجو در محصولات..."
              className={searchInputClass}
            />
          </div>
        </div>

        <div className="me-auto flex items-center gap-1.5 sm:me-0 sm:gap-2">
          <Link
            href="/login"
            className="inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:px-4"
          >
            <UserIcon className="text-zinc-500" />
            <span className="hidden sm:inline">ورود</span>
          </Link>

          <Link
            href="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-[var(--brand-primary)] sm:h-10 sm:w-auto sm:gap-2 sm:px-4"
            aria-label="سبد خرید"
          >
            <CartIcon className="shrink-0" />
            <span className="hidden text-sm font-medium sm:inline">سبد</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-zinc-100 px-4 pb-3 sm:hidden" role="search">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="search"
            placeholder="جستجو..."
            aria-label="جستجو"
            className="h-10 w-full rounded-full border border-zinc-200 bg-zinc-50 pr-10 pl-3 text-sm outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/15"
          />
        </div>
      </div>
    </header>
  );
}
