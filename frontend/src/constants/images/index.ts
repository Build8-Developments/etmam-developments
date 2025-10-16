// Image paths organized by category
export const IMAGE_PATHS = {
  logos: {
    main: '/images/logos/logo.png',
    alt: '/images/logos/logo-alt.png',
    large: '/images/logos/logo-large.png',
  },
  backgrounds: {
    hero: '/images/backgrounds/bg.jpg',
    footer: '/images/backgrounds/bgfooter.jpg',
    cta: '/images/backgrounds/cta.jpg',
    ctaLarge: '/images/backgrounds/cta-large.png',
    bigLeft: '/images/backgrounds/bigleft.jpg',
    bigRight: '/images/backgrounds/bigrigth.jpg',
  },
  people: {
    main: '/images/people/men.png',
    alt: '/images/people/person-alt.png',
    small: '/images/people/person-small.png',
    background: '/images/people/person-background.png',
  },
  icons: {
    main: '/images/icons/icon.png',
    circle: '/images/icons/circle.png',
    ellipse: '/images/icons/ellipse.png',
    topRight: '/images/icons/top-right.png',
    behindAbout: '/images/icons/behind-about.png',
    network: '/images/icons/network.png',
    networkAlt: '/images/icons/network-alt.png',
    vector: '/images/icons/vector.png',
    vectorLeft: '/images/icons/vector-left.png',
    paymentMethod: '/images/icons/payment-method.png',
    paymentMethod1: '/images/icons/payment-method-1.png',
    paymentMethod2: '/images/icons/payment-method-2.png',
    icon11: '/images/icons/icon-11.png',
    icon4: '/images/icons/icon-4.png',
  },
  blog: {
    post1: '/images/blog/blog1.jpg',
    post2: '/images/blog/blog-2.jpg',
    left: '/images/blog/blog-left.jpg',
    right: '/images/blog/blog-right.jpg',
  },
  svg: {
    file: '/images/svg/file.svg',
    globe: '/images/svg/globe.svg',
    window: '/images/svg/window.svg',
    next: '/images/svg/next.svg',
    vercel: '/images/svg/vercel.svg',
  },
} as const;

// Default images for fallback
export const DEFAULT_IMAGES = {
  logo: IMAGE_PATHS.logos.main,
  hero: IMAGE_PATHS.backgrounds.hero,
  person: IMAGE_PATHS.people.main,
  placeholder: '/images/placeholder.jpg',
} as const;
