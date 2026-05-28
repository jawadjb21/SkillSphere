"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ navLink }) => {
    const pathname = usePathname();
    const isActive = navLink.path === pathname;
    return (
        <div>
            <Link href={navLink.path} className={`${isActive ? "text-[#e1ff51]":"text-zinc-50"} font-bold text-2xl hover:underline`}>{navLink.name}</Link>
        </div>
    );
};

export default NavLink;