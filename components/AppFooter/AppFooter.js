import Link from "next/link";
import SocialLink, { SOCIALS } from "@/components/SocialLink";
import Navigation from "@/public/navigation.json";

const INFO_LINKS = [
  { name: "Kontakt", href: "/kontakt" },
  { name: "Marketing", href: "/marketing" },
  { name: "O nama", href: "/o-nama" },
  { name: "Politika privatnosti", href: "/politika-privatnosti" },
];

const linkClass = "text-sm text-secondary/70 transition-colors duration-200 hover:text-volt";

const LinkColumn = ({ title, links, label }) => (
  <nav aria-label={label}>
    <h2 className="kicker mb-4 text-volt">{title}</h2>
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className={linkClass}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const AppFooter = () => (
  <footer className="grain w-full bg-navy-900 text-secondary">
    <div className="shell py-14">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <span className="display text-4xl leading-none text-secondary">
            Time<span className="text-volt">Out</span>
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-secondary/60">
            Sportske vesti, analize i ekskluzivne priče — na jednom mestu, u saradnji sa
            SportKlubom.
          </p>
        </div>

        <LinkColumn title="Sekcije" links={Navigation} label="Sekcije" />
        <LinkColumn title="Informacije" links={INFO_LINKS} label="Informacije" />

        <div>
          <h2 className="kicker mb-4 text-volt">Pratite nas</h2>
          <div className="flex items-center gap-3">
            {SOCIALS.map((item) => (
              <SocialLink key={item.name} item={item} variant="pill" size={18} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 h-px w-full bg-white/10" />

      <div className="mt-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-sm text-secondary/50">&copy; 2026 TimeOut. Sva prava zadržana.</p>
        <p className="kicker text-secondary/35">Izvor vesti · SportKlub</p>
      </div>
    </div>
  </footer>
);

export default AppFooter;
