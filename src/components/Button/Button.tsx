import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  className,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <span target={target} className={className}>
        {children}
      </span>
    </Link>
  );
};

export default Button;