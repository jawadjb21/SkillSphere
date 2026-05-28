import Link from 'next/link';
import React from 'react';

const NavLinkFooter = ({ navLink }) => {
    return (
        <Link
            href={navLink.path}
            className="hover:text-[#e1ff51] transition-colors"
        >
            {navLink.name}
        </Link>);
};

export default NavLinkFooter;