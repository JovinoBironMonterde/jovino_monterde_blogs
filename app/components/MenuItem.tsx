// MenuItem.tsx

import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  activeRoute: string;
  isActive: boolean;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, activeRoute, isActive, children }) => {
  return (
    <Link href={href} passHref>
      <span className={`menubutton ${isActive ? 'active' : ''}`}>{children}</span>
    </Link>
  );
};

export default MenuItem;
