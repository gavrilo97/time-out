import { byCategoryOrLink, byLink } from "@/lib/feed";

export const SPORTS = {
  fudbal: {
    title: "Fudbal",
    kicker: "Domaći i evropski fudbal",
    description:
      "Najnovije fudbalske vesti — domaća prvenstva, evropska takmičenja i reprezentacija, preuzeto sa portala SportKlub.",
    match: (items) => byCategoryOrLink(items, "fudbal"),
  },
  kosarka: {
    title: "Košarka",
    kicker: "ABA, Evroliga i NBA",
    description:
      "Košarkaške vesti iz ABA lige, Evrolige i NBA — rezultati, analize i najave utakmica.",
    match: (items) => byCategoryOrLink(items, "kosarka"),
  },
  tenis: {
    title: "Tenis",
    kicker: "ATP, WTA i Grend slem",
    description:
      "Teniske vesti sa ATP i WTA turnira, Grend slem takmičenja i nastupi srpskih tenisera.",
    match: (items) => byCategoryOrLink(items, "tenis"),
  },
  ostalo: {
    title: "Ostali sportovi",
    kicker: "Auto-moto i ostali sportovi",
    description:
      "Vesti iz auto-moto sporta, odbojke, vaterpola i ostalih sportskih disciplina.",
    match: (items) => byLink(items, "ostali-sportovi", "automoto"),
  },
};
