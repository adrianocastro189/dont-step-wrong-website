/**
 * English (default) UI strings.
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
    heroLead: 'Discover it through trial and error.',
    howItWorksTitle: 'Got it wrong? Good. Try again.',
    howItWorksBody: 'Every level is a rule discovery puzzle. No hints, no tutorial, no explanation. Step on the wrong block, observe what happened, and figure it out. The implicit rules are always there.',
    mechanicsTitle: 'What you\'ll find',
    rulesCardTitle: 'Rules',
    skillsCardTitle: 'Skills',
    zonesCardTitle: 'Zones',
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
