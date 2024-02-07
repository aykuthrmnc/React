import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-4 flex flex-wrap gap-3 px-4">
      <Link to="/" className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] hover:underline">
        Hizmet Şartları
      </Link>
      <Link to="/" className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] hover:underline">
        Gizlilik Politikası
      </Link>
      <Link to="/" className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] hover:underline">
        Çerez Politikası
      </Link>
      <Link to="/" className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] hover:underline">
        Imprint
      </Link>
      <Link to="/" className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] hover:underline">
        Erişilebilirlik
      </Link>
      <Link to="/" className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] hover:underline">
        Reklam bilgisi
      </Link>
      <Popover className="relative inline-flex leading-4">
        <Popover.Button className="inline-flex items-center text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)] outline-none hover:underline">
          Daha fazla{" "}
          <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            ></path>
          </svg>
        </Popover.Button>
        <Popover.Panel className="absolute bottom-0 right-0 grid w-[9.375rem] max-w-[24rem] overflow-hidden rounded-xl bg-[color:var(--background-primary)] shadow-box">
          <Link
            to="/"
            className="px-4 py-3 text-[0.938rem] font-bold leading-5 transition-colors hover:bg-[color:var(--background-secondary)]"
          >
            Hakkında
          </Link>
          <Link
            to="/"
            className="px-4 py-3 text-[0.938rem] font-bold leading-5 transition-colors hover:bg-[color:var(--background-secondary)]"
          >
            X uygulamasını indir
          </Link>
          <Link
            to="/"
            className="px-4 py-3 text-[0.938rem] font-bold leading-5 transition-colors hover:bg-[color:var(--background-secondary)]"
          >
            Durum
          </Link>
          <Link
            to="/"
            className="px-4 py-3 text-[0.938rem] font-bold leading-5 transition-colors hover:bg-[color:var(--background-secondary)]"
          >
            İşletmeler için X
          </Link>
          <Link
            to="/"
            className="px-4 py-3 text-[0.938rem] font-bold leading-5 transition-colors hover:bg-[color:var(--background-secondary)]"
          >
            Geliştiriciler
          </Link>
        </Popover.Panel>
      </Popover>
      <div className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)]">
        @ {new Date().getFullYear()} X Corp.
      </div>
    </footer>
  );
};
export default Footer;
