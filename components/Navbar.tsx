import Link from 'next/link';
import { useState } from 'react';
import { Logo, navLinks } from '../data/siteMetaData';
import useMediaQuery from '../hooks/useMediaQuery';

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  return (
    <nav className="py-6 max-w-7xl px-4 sm:px-6 lg:px-8 tracking-wider">
      <div className="flex items-center justify-between mx-auto mt-[30px] mb-[170px]">
        <Link
          href="/"
          className="font-Spectral text-3xl font-semibold text-[#1B73E8]"
        >
          {Logo}
        </Link>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 text-[15.5px] font-normal">
            {navLinks.map((navLink) => {
              const { id, href, link } = navLink;
              return (
                <ul key={id}>
                  <Link
                    href={href}
                    className="tracking-wider hover:text-[#1B73E8] text-[#11345a] duration-300 hover:underline underline-offset-8"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </ul>
              );
            })}
          </div>
        ) : (
          <button className="" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}

        {/* MOBILE MENU */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-cyan-500 w-[300px]">
            {/* Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white z-50">
              {navLinks.map((navLink) => {
                const { id, href, link } = navLink;
                return (
                  <ul key={id}>
                    <Link href={href} className="tracking-wider">
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
