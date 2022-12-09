import Link from 'next/link';
import { footerCopyright, socialLinks } from '../data/siteMetaData';

const Footer = () => {
  return (
    <footer className="py-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-sm flex items-center tracking-widest">
        <p>{footerCopyright}</p>
        <div className="ml-auto">
          <ul className="flex items-center gap-6">
            {socialLinks.map((socialLink) => {
              const { id, social, link } = socialLink;
              return (
                <li key={id}>
                  <Link
                    href={link}
                    target="_blank"
                    className="leading-tight hover:underline underline-offset-4"
                  >
                    {social.charAt(0).toUpperCase() + social.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
