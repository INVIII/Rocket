import React from 'react';
import Link from 'next/link';
import { RiArrowDropDownLine } from "react-icons/ri";

interface MoreMenuProps {
  items: { id: number; title: string; href: string }[];
  isOpen: boolean;
  toggleMenu: () => void;
}

const MoreMenu: React.FC<MoreMenuProps> = ({ items, isOpen, toggleMenu }) => {
  return (
    <div className="relative">
      <button
        className="flex items-center focus:outline-none"
        onClick={toggleMenu}
      >
        <RiArrowDropDownLine size={50} />
      </button>
      {isOpen && (
        <ul className="absolute w-56 mt-8 bg-gray-800 shadow-md rounded">
          {items.map(({ id, title, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="block text-base px-4 py-2 text-white hover:text-orange-400"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoreMenu;