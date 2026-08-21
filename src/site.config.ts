// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Cole Smith',
  role: 'Mechanical Engineer',
  email: 'cole@coleaustinsmith.com',
  tagline: 'Mechanical Engineering Graduate',
  status: 'Actively looking for full-time hardware engineering roles',
  social: [
    { label: 'GitHub', href: 'https://github.com/casscientist' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cole-smith-engineer/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/#about' },
] as const;