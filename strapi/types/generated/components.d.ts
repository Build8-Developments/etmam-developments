import type { Schema, Struct } from '@strapi/strapi';

export interface ContentAboutHeroStats extends Struct.ComponentSchema {
  collectionName: 'components_content_about_hero_stats';
  info: {
    displayName: 'about-numbers-counter-stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContentAboutWhyChooseSingleCard
  extends Struct.ComponentSchema {
  collectionName: 'components_content_about_why_choose_single_cards';
  info: {
    displayName: 'about-why-choose-single-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContentAchievementCard extends Struct.ComponentSchema {
  collectionName: 'components_content_achievement_cards';
  info: {
    displayName: 'achievement-card';
  };
  attributes: {
    MessageDescription: Schema.Attribute.Text;
    MessageImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    MessageTitle: Schema.Attribute.String;
    VisionDescription: Schema.Attribute.Text;
    VisionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    VisionTitle: Schema.Attribute.String;
  };
}

export interface ContentContentServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_content_content_service_cards';
  info: {
    displayName: 'service-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    serviceLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_content_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    order: Schema.Attribute.Integer;
    question: Schema.Attribute.String;
  };
}

export interface ContentNumberedStep extends Struct.ComponentSchema {
  collectionName: 'components_content_numbered_steps';
  info: {
    displayName: 'numbered-step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface ContentPartnerLogo extends Struct.ComponentSchema {
  collectionName: 'components_content_partner_logos';
  info: {
    displayName: 'partner-logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

export interface ContentServiceSlide extends Struct.ComponentSchema {
  collectionName: 'components_content_service_slides';
  info: {
    displayName: 'service-slide';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContentStatItem extends Struct.ComponentSchema {
  collectionName: 'components_content_stat_items';
  info: {
    displayName: 'stat-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface SectionsAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_heroes';
  info: {
    displayName: 'about-hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    primaryButton: Schema.Attribute.Component<'ui.button', false>;
    secondaryButton: Schema.Attribute.Component<'ui.button', false>;
    stats: Schema.Attribute.Component<'content.about-hero-stats', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 2;
        },
        number
      >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutUsComponent extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_us_components';
  info: {
    displayName: 'about-us-component';
  };
  attributes: {
    description: Schema.Attribute.Text;
    partnersCount: Schema.Attribute.Integer;
    partnersCountText: Schema.Attribute.String;
    primaryImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    secondaryImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    trustDescription: Schema.Attribute.Text;
    visionDescription: Schema.Attribute.Text;
  };
}

export interface SectionsAchievements extends Struct.ComponentSchema {
  collectionName: 'components_sections_achievements';
  info: {
    displayName: 'achievements';
  };
  attributes: {
    NumbersCounter: Schema.Attribute.Component<
      'content.about-hero-stats',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 2;
        },
        number
      >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactUsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_us_cards';
  info: {
    displayName: 'contact-us-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'cta-section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'faq-section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'content.faq-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 4;
        },
        number
      >;
    string: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    personImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    primaryButton: Schema.Attribute.Component<'ui.button', false>;
    secondaryButton: Schema.Attribute.Component<'ui.button', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHowItWorksSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_it_works_sections';
  info: {
    displayName: 'how-it-works-section';
  };
  attributes: {
    bannerText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    personImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    steps: Schema.Attribute.Component<'content.numbered-step', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 2;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPartnersSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners_sections';
  info: {
    displayName: 'partners-section';
  };
  attributes: {
    partners: Schema.Attribute.Component<'content.partner-logo', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
  };
}

export interface SectionsServicesCarouselSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_carousel_sections';
  info: {
    displayName: 'services-carousel-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'content.service-slide', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_sections';
  info: {
    displayName: 'services-section';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'ui.button', false>;
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'content.content-service-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 3;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsStatisticsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics_sections';
  info: {
    displayName: 'statistics-section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    stats: Schema.Attribute.Component<'content.stat-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSuccess extends Struct.ComponentSchema {
  collectionName: 'components_sections_successes';
  info: {
    displayName: 'success';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    VisionMessage: Schema.Attribute.Component<
      'content.achievement-card',
      false
    >;
  };
}

export interface SectionsWhyChooseUsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_choose_us_sections';
  info: {
    displayName: 'why-choose-us-section';
  };
  attributes: {
    content: Schema.Attribute.Component<
      'content.about-why-choose-single-card',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 3;
        },
        number
      >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'apps';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface UiIconTextCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_icon_text_cards';
  info: {
    displayName: 'icon-text-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.about-hero-stats': ContentAboutHeroStats;
      'content.about-why-choose-single-card': ContentAboutWhyChooseSingleCard;
      'content.achievement-card': ContentAchievementCard;
      'content.content-service-card': ContentContentServiceCard;
      'content.faq-item': ContentFaqItem;
      'content.numbered-step': ContentNumberedStep;
      'content.partner-logo': ContentPartnerLogo;
      'content.service-slide': ContentServiceSlide;
      'content.stat-item': ContentStatItem;
      'sections.about-hero': SectionsAboutHero;
      'sections.about-us-component': SectionsAboutUsComponent;
      'sections.achievements': SectionsAchievements;
      'sections.contact-us-card': SectionsContactUsCard;
      'sections.cta-section': SectionsCtaSection;
      'sections.faq-section': SectionsFaqSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.how-it-works-section': SectionsHowItWorksSection;
      'sections.partners-section': SectionsPartnersSection;
      'sections.services-carousel-section': SectionsServicesCarouselSection;
      'sections.services-section': SectionsServicesSection;
      'sections.statistics-section': SectionsStatisticsSection;
      'sections.success': SectionsSuccess;
      'sections.why-choose-us-section': SectionsWhyChooseUsSection;
      'shared.seo': SharedSeo;
      'ui.button': UiButton;
      'ui.icon-text-card': UiIconTextCard;
    }
  }
}
