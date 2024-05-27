"use client";

import React, { useReducer } from 'react';
import Image from 'next/image';
import logo from '../../assets/images/ROCKET.png'
import Link from 'next/link';
import '../../styles/Navbar.css';
import MoreMenu from './MoreMenu';

interface NavbarState {
  isMoreMenuOpen: boolean;
}

const initialState: NavbarState = {
  isMoreMenuOpen: false,
};

const navbarReducer = (state: NavbarState, action: { type: string }) => {
  switch (action.type) {
    case 'TOGGLE_MORE_MENU':
      return { isMoreMenuOpen: !state.isMoreMenuOpen };
    default:
      return state;
  }
};

const Navbar: React.FC = () => {
  const [state, dispatch] = useReducer(navbarReducer, initialState);

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
      {/* left part of the navbar */}
      <div className="left flex items-center pl-28">
        <Link href="/" className="text-2xl w-full font-bold text-white-800">
          <Image
            src={logo}
            alt="Rocket"
            className="logo"
            width={180}
            layout="responsive"
          />
        </Link>
      </div>

      {/* right part of the navbar */}
      <div className="right flex items-center pr-28">
        <ul className="list hidden md:flex items-center space-x-16">
          {links.map(({ id, title, href, moreMenuItems }) => (
            <li key={id}>
              <Link href={href} className="text-xl font-medium hover:underline">
                {title}
              </Link>
              {moreMenuItems && (
                <MoreMenu
                  items={moreMenuItems}
                  isOpen={state.isMoreMenuOpen}
                  toggleMenu={() => dispatch({ type: 'TOGGLE_MORE_MENU' })}
                />
              )}
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          rel="noopener noreferrer"
          className="text-xl font-semibold bg-orango text-white px-8 py-3.5 rounded-lg hover:bg-white hover:text-orango nav-link button-2"
        >
          SUBSCRIBE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;