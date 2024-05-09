"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'Portfolio', href: '/portfolio' },
    { id: 3, title: 'Services', href: '/services' },
    { id: 4, title: 'TL;DR', href: '/tldr' },
  ];

  const moreLinks = [
    { id: 1, title: 'FAQs', href: '/faqs' },
    { id: 2, title: 'Career', href: '/career' },
  ];

  return (
    <nav className="fixed w-full h-20 flex items-center justify-between px-8 bg-white shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-800">The House of Aster</a>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ id, title, href }) => (
            <Link key={id} href={href}>
              <a className="text-xl font-medium hover:underline">
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button className="flex items-center focus:outline-none">
              <span className="mr-1">More</span>
              <AiOutlineClose size={20} />
            </button>
            <div className="absolute w-56 mt-2 bg-white shadow-md">
              {moreLinks.map(({ id, title, href }) => (
                <Link key={id} href={href}>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    {title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Subscribe
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button className="flex items-center focus:outline-none" onClick={() => setNav(!nav)}>
          <span className="mr-1">Menu</span>
          <AiOutlineClose size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;