"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '../../styles/Navbar.css';
import MoreMenu from './MoreMenu';

const Navbar: React.FC = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const links = [
    { id: 1, title: 'PORTFOLIO', href: '#works' },
    { id: 2, title: 'SERVICES', href: '#services' },
    { id: 3, title: 'TL;DR', href: '#tldr' },
    {
      id: 4,
      title: 'MORE',
      href: '#more',
      moreMenuItems: [
        { id: 1, title: 'FAQS', href: '#FAQ' },
        { id: 2, title: 'WORK WITH US', href: '/join' },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 w-full h-36 flex items-center justify-between my-4 bg-black shadow-md">
      <div className="left flex items-center pl-20">
        <Link href="/" className="text-2xl w-full font-bold text-white-800">
          <img
            src="https://assets-global.website-files.com/653157fae6dd8877ce54f989/65b5e8ee2253653d39b520a3_THA%20Type%20White%20T.png"
            alt="The House of Aster"
            className="logo"
            width={280}
            height="auto"
          />
        </Link>
      </div>
      <div className="right flex items-center pr-20">
        <ul className="list hidden md:flex items-center space-x-16">
          {links.map(({ id, title, href, moreMenuItems }) => (
            <li key={id}>
              <Link href={href} className="text-xl font-medium hover:underline">
                {title}
              </Link>
              {moreMenuItems && (
                <MoreMenu
                  items={moreMenuItems}
                  isOpen={isMoreMenuOpen}
                  toggleMenu={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                />
              )}
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          target="_blank"
          className="text-xl font-semibold bg-orango text-white px-8 py-3.5 rounded-lg hover:bg-white hover:text-orange-500 nav-link button-2"
        >
          SUBSCRIBE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;