import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gold';
  className?: string;
}

export default function Button({ children, href, target, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-[1.03] text-center inline-block cursor-pointer";
  const variants = {
    primary: "bg-maroon hover:bg-maroon-light text-cream border-2 border-gold/40 hover:border-gold",
    secondary: "bg-transparent hover:bg-maroon-dark/20 text-maroon hover:text-maroon-dark border-2 border-maroon/30 hover:border-maroon",
    gold: "bg-gold hover:bg-gold-dark text-maroon-dark border-2 border-gold-dark/20",
  };

  const combinedStyles = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://') || target === '_blank';
    if (isExternal) {
      return (
        <a href={href} target={target || "_blank"} rel="noopener noreferrer" className={combinedStyles}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
