import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown } from "react-icons/md";

interface MoreMenuProps {
  items: { id: number; title: string; href: string }[];
  isOpen: boolean;
  toggleMenu: () => void;
}

const MoreMenu: React.FC<MoreMenuProps> = ({ items, isOpen, toggleMenu }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <MdKeyboardArrowDown size={35} />
      </div>
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