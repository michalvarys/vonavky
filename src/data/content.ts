export type HeroVariant = "default" | "layered" | "spray";

export type SectionName =
  | "hero"
  | "value"
  | "offer"
  | "story"
  | "waitlist"
  | "footer";

export interface SectionConfig {
  name: SectionName;
  active?: boolean; // default true
}

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
    ctaHref?: string;
    ctaSecondary?: string;
    ctaSecondaryHref?: string;
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
    exclusive?: {
      text: string;
      highlight: string;
      cta: string;
    };
    sampleCta?: string;
    samplePaymentLink?: string;
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
      paymentLink: string;
      showTimer?: boolean;
    };
  };
  footer: {
    copyright: string;
  };
  sections: SectionConfig[];
}

export type VariantSlug = string;

export interface Variant {
  slug: VariantSlug;
  content: SiteContent;
}
