import SectionHeading from "@/components/SectionHeading";
import { CONTACT, ADDRESS_LINE } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Politika privatnosti",
  description:
    "Kako TimeOut postupa sa podacima posetilaca: bez kolačića, bez analitike i bez praćenja.",
  path: "/politika-privatnosti",
});

const UPDATED = "22. septembar 2026.";

const SECTIONS = [
  {
    heading: "Ko je rukovalac podacima",
    body: [
      `Rukovalac podacima o ličnosti je TimeOut, ${ADDRESS_LINE}.`,
      `Za sva pitanja u vezi sa zaštitom podataka možete nam pisati na ${CONTACT.email} ili nas pozvati na ${CONTACT.phone}.`,
    ],
  },
  {
    heading: "Koje podatke prikupljamo",
    body: [
      "TimeOut ne traži i ne prikuplja vaše lične podatke. Na sajtu nema korisničkih naloga, registracije, formulara za prijavu na novosti niti polja u koja biste unosili svoje podatke.",
      "Kao i svaki veb sajt, server na kom je TimeOut postavljen može automatski beležiti tehničke podatke o poseti — IP adresu, vrstu pregledača i operativnog sistema, vreme pristupa i adresu stranice sa koje ste došli. Ti zapisi služe isključivo za održavanje sajta i bezbednost, i ne koristimo ih da vas identifikujemo niti ih povezujemo sa drugim podacima.",
    ],
  },
  {
    heading: "Kolačići (cookies)",
    body: [
      "TimeOut ne postavlja kolačiće i ne koristi alate za analitiku, praćenje posetilaca niti oglasne mreže. Ne čuvamo podatke u memoriji vašeg pregledača (localStorage ili sessionStorage).",
      "To znači da vam pri poseti ne prikazujemo obaveštenje o kolačićima — jednostavno ih nema.",
    ],
  },
  {
    heading: "Sadržaj koji se preuzima sa SportKluba",
    body: [
      "Vesti na sajtu preuzimaju se automatski iz javnog RSS izvora portala SportKlub (sportklub.rs). Naslove i najave učitava naš server, pa se vaša poseta ne prijavljuje SportKlubu prilikom tog preuzimanja.",
      "Fotografije uz vesti se, međutim, učitavaju direktno sa servera SportKluba. Kada otvorite stranicu, vaš pregledač šalje zahtev tim serverima, koji tom prilikom mogu videti vašu IP adresu i podatke o pregledaču. Na to nemamo uticaj i za takvu obradu važi politika privatnosti SportKluba.",
    ],
  },
  {
    heading: "Linkovi ka drugim sajtovima",
    body: [
      "Naslovi vesti vode na originalne članke na portalu SportKlub, a baneri i ikonice vode na sajtove naših partnera i na društvene mreže (Facebook, Instagram, YouTube).",
      "Kada kliknete na takav link, napuštate TimeOut i dalje važe pravila i politike privatnosti tih sajtova. Ne preuzimamo odgovornost za njihov sadržaj niti za način na koji obrađuju vaše podatke.",
    ],
  },
  {
    heading: "Fontovi i spoljni resursi",
    body: [
      "Fontovi koje sajt koristi isporučuju se sa našeg servera, a ne sa Google servera. Prilikom učitavanja stranice vaš pregledač ne šalje nikakav zahtev ka Google-u zbog tipografije.",
    ],
  },
  {
    heading: "Koliko dugo čuvamo podatke",
    body: [
      "Tehničke zapise o pristupu čuvamo samo onoliko koliko je potrebno za održavanje i bezbednost sajta, nakon čega se brišu ili se njihov sadržaj više ne može povezati sa pojedinačnim posetiocem.",
    ],
  },
  {
    heading: "Vaša prava",
    body: [
      "U skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije imate pravo da od nas zatražite pristup podacima koji se na vas odnose, njihovu ispravku ili brisanje, ograničenje obrade, kao i da uložite prigovor na obradu.",
      "Pošto ne vodimo evidenciju koja bi vas identifikovala, u većini slučajeva nećemo biti u mogućnosti da vas povežemo sa konkretnim podacima — ali ćemo na svaki zahtev odgovoriti i objasniti šta je dostupno.",
      "Ako smatrate da su vaša prava povređena, možete podneti pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti.",
    ],
  },
  {
    heading: "Izmene ove politike",
    body: [
      "Politiku privatnosti možemo povremeno dopuniti, na primer ako na sajt dodamo novu funkcionalnost. Svaka izmena biće objavljena na ovoj stranici, uz ažuriran datum poslednje izmene.",
    ],
  },
];

const PolitikaPrivatnosti = () => (
  <main className="w-full bg-paper pb-20">
    <section className="shell pt-12">
      <SectionHeading title="Politika privatnosti" kicker="Zaštita podataka" as="h1" />

      <div className="prose mt-10 max-w-3xl">
        <p className="lead">
          TimeOut je sportski portal koji objavljuje vesti preuzete iz javnog RSS izvora portala
          SportKlub. Sajt ne prikuplja lične podatke, ne koristi kolačiće i ne prati posetioce.
        </p>
      </div>

      <p className="kicker mt-4 text-grayDark">Poslednja izmena: {UPDATED}</p>

      <div className="mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
        {SECTIONS.map((section) => (
          <article key={section.heading} className="prose flex flex-col gap-3">
            <SectionHeading title={section.heading} size="sm" rule={false} />
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>

      <div className="mt-14 max-w-4xl rounded-card bg-navy-800 p-8 shadow-card">
        <h2 className="kicker mb-3 text-volt">Kontakt</h2>
        <p className="text-[0.95rem] leading-relaxed text-secondary/75">
          Imate pitanje o obradi podataka ili o ovoj politici? Pišite nam na{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-volt underline decoration-volt/40 underline-offset-4 transition-colors hover:decoration-volt"
          >
            {CONTACT.email}
          </a>
          .
        </p>
      </div>

      <p className="mt-8 max-w-4xl text-xs leading-relaxed text-grayMid">
        Napomena: TimeOut je studentski projekat izrađen kao diplomski rad. Ovaj tekst opisuje kako
        sajt stvarno funkcioniše, ali ne predstavlja pravni savet. Pre komercijalne upotrebe sajta
        preporučujemo proveru kod pravnog stručnjaka.
      </p>
    </section>
  </main>
);

export default PolitikaPrivatnosti;
