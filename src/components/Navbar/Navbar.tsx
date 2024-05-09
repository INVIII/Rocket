"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, title: 'HOME', href: '/' },
    { id: 2, title: 'PORTFOLIO', href: '/portfolio' },
    { id: 3, title: 'SERVICES', href: '/services' },
    { id: 4, title: 'tl dr', href: '/tl' },
  ];

  const moreLinks = [
    { id: 1, title: 'FAQs', href: '/faqs' },
    { id: 2, title: 'Career', href: '/career' },
  ];

  return (
    <nav className="fixed w-full h-20 flex items-center justify-between px-8 bg-white shadow-md">
      <div className="flex items-center">
        <AiOutlineMenu
          size={30}
          className="cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <div className="flex items-center ml-10">
          {links.map(({ id, title, href }) => (
            <Link key={id} href={href}>
              <a className="text-xl font-medium mr-10 hover:underline">
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-10">
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
    </nav>
  );
};

export default Navbar;