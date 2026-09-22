import Link from "next/link";

export const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com/",
    path: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    path: "M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 1 0 12 8.2Zm5.2-.9a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5h-9Z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    path: "M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.2V8.8l5.2 3.2L10 15.2Z",
  },
];

const VARIANTS = {
  bare: "text-secondary transition-colors duration-200 hover:text-volt",
  pill: "h-10 w-10 rounded-full border border-white/15 text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-volt hover:text-volt",
};

const SocialLink = ({ item, variant = "bare", size = 19 }) => (
  <Link
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={item.name}
    className={`grid place-items-center ${VARIANTS[variant]}`}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={item.path} />
    </svg>
  </Link>
);

export default SocialLink;
