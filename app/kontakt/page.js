import SectionHeading from "@/components/SectionHeading";
import { CONTACT } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Kontakt",
  description: "Kontaktirajte redakciju TimeOut portala — adresa, e-mail i broj telefona.",
  path: "/kontakt",
});

const DETAILS = [
  { label: "Produkcijski centar", lines: [CONTACT.street, CONTACT.city] },
  { label: "Izdavač", lines: [CONTACT.name, CONTACT.street, CONTACT.city] },
];

const Kontakt = () => (
  <main className="w-full bg-paper pb-20">
    <section className="shell pt-12">
      <SectionHeading title="Kontakt" kicker="Javite nam se" as="h1" />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {DETAILS.map((block) => (
          <div key={block.label} className="rounded-card border border-grayBase bg-secondary p-6 shadow-card">
            <h2 className="kicker mb-3 text-volt-deep">{block.label}</h2>
            <address className="flex flex-col gap-1 not-italic text-[0.95rem] leading-relaxed text-grayDark">
              {block.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>
        ))}

        <div className="rounded-card bg-navy-800 p-6 shadow-card">
          <h2 className="kicker mb-3 text-volt">Direktan kontakt</h2>
          <div className="flex flex-col gap-3 text-[0.95rem]">
            <a
              href={`mailto:${CONTACT.email}`}
              className="break-all text-secondary transition-colors duration-200 hover:text-volt"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="text-secondary transition-colors duration-200 hover:text-volt"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Kontakt;
