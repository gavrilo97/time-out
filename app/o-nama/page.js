import SectionHeading from "@/components/SectionHeading";
import { CONTACT } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "O nama",
  description: "TimeOut je sportski portal nastao iz strasti prema sportu i sportskom novinarstvu.",
  path: "/o-nama",
});

const SECTIONS = [
  {
    heading: "Naša priča",
    body: "TimeOut je osnovan 2023. godine iz strasti prema sportu i entuzijazma prema sportskom novinarstvu. Nastao je kao plod diplomskog rada jednog ambicioznog studenta sa Visoke škole elektrotehnike i računarstva. Inspirisan ljubavlju prema sportu, stvoren je s ciljem pružanja vrhunskih sportskih vesti i informacija svim zaljubljenicima u igru.",
  },
  {
    heading: "Vizija",
    body: "Naša vizija je jednostavna - postati vaša centralna destinacija za najnovije vesti, analize, i ekskluzivne priče iz sveta sporta. Želimo da pružimo iskustvo koje prelazi granice jednostavnog informisanja, stvarajući zajednicu strastvenih ljubitelja sporta.",
  },
  {
    heading: "Partnerstvo sa SportKlubom",
    body: "U želji da ponudimo najkvalitetnije informacije, uspostavili smo saradnju sa jednim od najvećih imena u sportskom novinarstvu na našem tržištu - SportKlub. Ovo partnerstvo nam omogućava pristup ekskluzivnim sadržajima i dublju analizu sportskih dešavanja, kako bismo vam pružili najrelevantnije informacije.",
  },
  {
    heading: "Naš tim",
    body: "Napredak TimeOut-a nije moguć bez stručnog i posvećenog tima. Naši novinari, urednici i tehnički stručnjaci rade zajedno kako bi vam doneli najnovije vesti na brz i informativan način. Njihova posvećenost i strast prema sportu odražavaju se u svakom članku i priči koju delimo.",
  },
  {
    heading: "Budite deo naše priče",
    body: "TimeOut nije samo veb stranica - to je zajednica ljubitelja sporta koja raste svakog dana. Hvala vam što ste deo naše priče. Pružite nam povratne informacije, delite svoje sportske trenutke i budite u toku sa najnovijim dešavanjima. Vaša podrška nas inspiriše da idemo dalje i dostignemo nove visine.",
  },
];

const ONama = () => (
  <main className="w-full bg-paper pb-20">
    <section className="shell pt-12">
      <SectionHeading title="O nama" kicker="Upoznajte TimeOut" as="h1" />

      <div className="prose mt-10 max-w-3xl">
        <p className="lead">Dobrodošli u TimeOut — vaš prozor u sportski svemir.</p>
      </div>

      <div className="mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
        {SECTIONS.map((section) => (
          <article key={section.heading} className="prose flex flex-col gap-3">
            <SectionHeading title={section.heading} size="sm" rule={false} />
            <p>{section.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 max-w-4xl rounded-card bg-navy-800 p-8 shadow-card">
        <h2 className="kicker mb-3 text-volt">Kontakt</h2>
        <p className="text-[0.95rem] leading-relaxed text-secondary/75">
          Imate pitanja, sugestije ili želite sarađivati s nama? Slobodno nas kontaktirajte na{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-volt underline decoration-volt/40 underline-offset-4 transition-colors hover:decoration-volt"
          >
            {CONTACT.email}
          </a>
          .
        </p>
        <p className="mt-6 display text-xl text-secondary">Hvala što ste s nama — vaš TimeOut tim</p>
      </div>
    </section>
  </main>
);

export default ONama;
