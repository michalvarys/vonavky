import type { SiteContent } from "../content";

export const content: SiteContent = {
  heroVariant: "spray",
  meta: {
    title: "Exkluzivní parfém | Exkluzivní edice 2026",
    description:
      "Objev luxusní parfém vytvořený francouzskými parfuméry. Exkluzivní edice — zapiš se na čekací listinu a získej vzorek zdarma.",
  },
  hero: {
    preheadline: "Exkluzivní edice 2026",
    title: "Neodolatelná",
    subtitle:
      "Vůně za kterou se otáčí. Jedno stříknutí a nepujdeš vymazat z hlavy.",
    // cta: "Vzorek zdarma",
    // ctaHref: "#waitlist",
    cta: "Zjistit víc",
    ctaHref: "#story",
    // ctaSecondary: "Zjistit víc",
    // ctaSecondaryHref: "#story",
    imgAlt: "Luxusní parfém – exkluzivní edice 2026",
  },
  story: {
    him: {
      badge: "Pro něj",
      name: "Síla & Charakter",
      text: "Představ si večer, kdy vstoupíš do místnosti a všichni to ucítí. Vůně, která říká víc než slova. Sebevědomí, které nepotřebuje vysvětlení.",
      evoke:
        "Hřejivé dřevo, špetka koření a něco, co nedokážou pojmenovat — ale nedokážou zapomenout.",
    },
    her: {
      badge: "Pro ni",
      name: "Elegance & Smyslnost",
      text: "Ta vůně, po které se ohlédne. Jemná, a přesto nezapomenutelná. Pro ženu, která ví, že skutečná elegance nepotřebuje být hlasitá.",
      evoke:
        "Hedvábný květ, dotek vanilky a tajemství, které prozradíš jen tomu, kdo se přiblíží dost blízko.",
    },
    // exclusive: {
    //   text: "Tohle nekoupíš v žádné drogerii. Vůně pro ty, kteří se odmítají",
    //   highlight: "ztratit v davu",
    //   cta: "Chci to zkusit",
    // },
  },
  value: {
    label: "Proč",
    heading: "Vůně, která změní tvůj den",
    subtext:
      'Znáš ten pocit, kdy se po tobě otočí a zeptají se: „Čím to voníš?" Přesně o tom mluvím.',
    cards: [
      {
        title: "Lidé si tě zapamatují",
        text: "Tvoje vůně dorazí dřív než ty. A zůstane i po tvém odchodu.",
      },
      {
        title: "Sebevědomí na celý den",
        text: "Jedno stříknutí a všechny oči na tobě.",
      },
      {
        title: "Žádný kompromis",
        text: "Čísté složení. Kompozice z přírodních ingrediencí.",
      },
      {
        title: "Tvoje tajná zbraň",
        text: "Nekoupíš v drogerii. Tohle nosí jen ti, co vědí.",
      },
    ],
    pricing: {
      marketLabel: "Běžná cena",
      marketPrice: "2 000–4 000 Kč",
      retailLabel: "Naše cena",
      retailPrice: "1 299 Kč",
      yourLabel: "Cena pro tebe",
      yourPrice: "ZDARMA",
    },
  },
  offer: {
    label: "Exkluzivní nabídka",
    heading: "Dnes si můžeš parfém zkusit zdarma",
    subtext: "",
    cta: "Získat vzorek zdarma",
    urgency: "Platí pouze pro omezený počet lidí.",
  },
  waitlist: {
    heading: "Zapiš se a získej vzorek zdarma",
    subtitle:
      "Zápis je nezávazný a zdarma. Tyto údaje jsou potřebné k doručení vašeho vzorku.",
    submit: "Zapsat se zdarma",
    note: "Poštovné platí odběratel.",
    upsell: {
      confirm: "Už jen malý krůček!",
      text: "Pro získání vzorku zdarma je potřeba pokrýt náklady na doručení a vyplnit adresu doručení.",
      highlight: "",
      cta: "Zaslat vzorek zdarma",
      paymentLink: "https://buy.stripe.com/dRm14p2xndEAcWp8sc2Nq06?locale=cs",
      note: "Nabídka platí jen omezenou dobu.",
    },
  },
  footer: {
    copyright: "© 2026 Maison de Parfum. Všechna práva vyhrazena.",
  },
  sections: [
    { name: "hero" },
    { name: "story" },
    { name: "value" },
    // { name: "offer" },
    { name: "waitlist" },
    { name: "footer" },
  ],
};
