// Navigation links
const name: string = 'Ken Mwangi';
const date = new Date().getFullYear();

// Social media
const twitter: string = 'https://twitter.com/ken_cipher';
const linkedin: string = `https://www.linkedin.com/in/kkmwangi/`;
const github: string = `https://github.com/kenmwangi`;
export const navLinks = [
  {
    id: '1',
    href: 'work',
    link: 'work',
  },
  {
    id: '2',
    href: 'about',
    link: 'about',
  },
  {
    id: '3',
    href: 'contact',
    link: 'contact',
  },
];

// Logo
export const Logo = 'KM.';

// Footer
export const footerCopyright = `${name} - ${date}`;

// Social Links
export const socialLinks = [
  {
    id: '1',
    social: 'twitter',
    link: `${twitter}`,
  },
  {
    id: '2',
    social: 'linkedin',
    link: `${linkedin}`,
  },
  {
    id: '3',
    social: 'github',
    link: `${github}`,
  },
];
