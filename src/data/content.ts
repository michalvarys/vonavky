export type HeroVariant = 'default' | 'layered';

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  heroVariant?: HeroVariant;
  hero: {
    preheadline: string;
    title: string;
    subtitle: string;
    cta: string;
    imgAlt: string;
  };
  story: {
    him: {
      badge: string;
      name: string;
      text: string;
      evoke: string;
    };
    her: {
      badge: string;
      name: string;
      text: string;
      evoke: string;
    };
    exclusive: {
      text: string;
      highlight: string;
      cta: string;
    };
  };
  value: {
    label: string;
    heading: string;
    subtext: string;
    cards: {
      title: string;
      text: string;
    }[];
    pricing: {
      marketLabel: string;
      marketPrice: string;
      retailLabel: string;
      retailPrice: string;
      yourLabel: string;
      yourPrice: string;
    };
  };
  offer: {
    label: string;
    heading: string;
    subtext: string;
    cta: string;
    urgency: string;
  };
  waitlist: {
    heading: string;
    subtitle: string;
    submit: string;
    note: string;
    upsell: {
      confirm: string;
      text: string;
      highlight: string;
      cta: string;
      note: string;
    };
  };
  footer: {
    copyright: string;
  };
}

export type VariantSlug = string;

export interface Variant {
  slug: VariantSlug;
  content: SiteContent;
}
