import SectionHeading from "@/components/SectionHeading";
import { CONTACT } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Marketing",
  description: "Oglašavanje na TimeOut portalu — dosegnite aktivnu publiku ljubitelja sporta.",
  path: "/marketing",
});

const REASONS = [
  {
    n: "01",
    heading: "Velika poseta",
    body: "Naša stranica beleži impresivan broj poseta svakog dana, pružajući vam priliku da dosegnete veliki broj ljubitelja sporta.",
  },
  {
    n: "02",
    heading: "Ciljana publika",
    body: "Fokusiramo se na sportske vesti i teme, privlačeći aktivnu publiku koja je angažovana i zainteresovana za sportske proizvode i usluge.",
  },
  {
    n: "03",
    heading: "Diversifikovani kanali",
    body: "Osim naše veb stranice, prisutni smo i na raznim društvenim mrežama i platformama, pružajući vam priliku za širok spektar oglašavanja.",
  },
];

const Marketing = () => (
  <main className="w-full bg-paper pb-20">
    <section className="shell pt-12">
      <SectionHeading title="Marketing" kicker="Oglašavanje" as="h1" />

      <div className="prose mt-10 max-w-3xl">
        <p className="lead">Zašto oglašavati sa nama?</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {REASONS.map((reason) => (
          <article
            key={reason.n}
            className="group rounded-card border border-grayBase bg-secondary p-7 shadow-card
                       transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-cardHover"
          >
            <span className="display text-5xl leading-none text-volt-deep transition-colors duration-300 group-hover:text-volt">
              {reason.n}
            </span>
            <h2 className="display mt-4 text-2xl text-primary">{reason.heading}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-grayDark">{reason.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 max-w-3xl">
        <SectionHeading title="Kako se oglašavati" size="sm" rule={false} />
        <div className="prose mt-3 flex flex-col gap-5">
          <p>
            Jednostavno kontaktirajte Time-Out Media putem e-mail adrese:{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-medium text-navy-600 underline decoration-volt decoration-2 underline-offset-4"
            >
              {CONTACT.email}
            </a>
            . Naš tim će vam pružiti sve potrebne informacije o dostupnim opcijama oglašavanja, kao
            i priliku za prilagođavanje kampanje prema vašim specifičnim potrebama.
          </p>
          <p>
            Povežite se sa svojom ciljanom publikom putem našeg sportskog kanala i osigurajte da vaš
            brend bude u središtu pažnje. Uspostavite kontakt s nama danas i otkrijte kako možemo
            zajedno stvoriti dinamičnu i uspešnu kampanju.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-3xl border-l-2 border-volt pl-6">
        <p className="text-[0.95rem] text-grayDark">Sportski pozdrav,</p>
        <p className="display text-2xl text-primary">TimeOut tim</p>
      </div>
    </section>
  </main>
);

export default Marketing;
