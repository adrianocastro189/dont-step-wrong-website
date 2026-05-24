/**
 * English (default) UI strings.
 * Copy refinement pending: Redator (see dev-web/memoria.md).
 */
export const en = {
  nav: {
    home: 'Home',
    mechanics: 'Mechanics',
    devlog: 'Devlog',
    presskit: 'Press Kit',
    privacy: 'Privacy',
    wishlist: 'Wishlist',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  cta: {
    playDemo: 'Play the demo — free on Steam',
    addToWishlist: 'Add to wishlist',
    seeOnSteam: 'See on Steam',
    followDevelopment: 'Follow development',
  },
  landing: {
    heroTitle: 'Every level has a rule. The game never tells you what it is.',
    heroLead: 'You figure it out by trial and error. That\'s the good part.',
    howItWorksTitle: 'Got it wrong? That\'s part of it. Try again.',
    howItWorksBody: 'Implicit rules. Real discovery. No hints. Each level is a small puzzle that resolves the moment you spot the pattern. No tutorial. No explanation. Just you and the grid.',
    mechanicsTitle: 'What you\'ll find',
    mechanicsLink: 'See all mechanics',
    finalCtaTitle: 'The game never tells you the rule. But you\'ll figure it out.',
    demoAvailable: 'Demo available — free',
  },
  mechanics: {
    h1: 'Systems, not secrets.',
    lead: 'Here\'s what the game has. The rules themselves — you discover by playing.',
    rulesTitle: 'Rule types',
    skillsTitle: 'Skills',
    biomesTitle: 'Biomes',
    soundsInteresting: 'Sounds interesting?',
  },
  devlog: {
    h1: 'Behind the scenes',
    lead: 'What\'s happening in development.',
    readMore: 'Read more',
    readingTime: 'min read',
    previousPost: 'Previous post',
    nextPost: 'Next post',
    likedItCta: 'Liked it? Play the demo for free.',
  },
  presskit: {
    h1: 'Press Kit',
    aboutTitle: 'About the game',
    featuresTitle: 'Features',
    assetsTitle: 'Assets',
    contactTitle: 'Contact',
    download: 'Download',
  },
  privacy: {
    h1: 'Privacy Policy',
    lastUpdated: 'Last updated',
  },
  footer: {
    rights: 'All rights reserved.',
    assetsCredit: 'Third-party asset credits',
    studio: 'Feriado',
  },
  meta: {
    siteName: 'Don\'t Step Wrong 2',
    studio: 'Feriado',
    locale: 'en_US',
  },
} as const;

export type Strings = typeof en;
