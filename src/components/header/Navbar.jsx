import React from 'react';
import navLinks from "@/data/navLinks.json";
import NavLink from './NavLink.jsx';
import Link from 'next/link.js';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image.js';

const Navbar = () => {
    return (
        <div className="navbar shadow-sm bg-[#00272c] px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <GiHamburgerMenu className='text-[#e1ff51] font-bold text-3xl'></GiHamburgerMenu>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#00272c] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks.map(navLink => <NavLink key={navLink.id} navLink={navLink}></NavLink>)}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="SkillSphere Logo"
                        width={30}
                        height={30}
                    />

                    <h2 className="text-3xl font-bold text-[#e1ff51]">
                        <Link href={"/"}>SkillSphere</Link>
                    </h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-x-4">
                    {navLinks.map(navLink => <NavLink key={navLink.id} navLink={navLink}></NavLink>)}
                </ul>
            </div>
            <div className="navbar-end flex gap-x-4 items-center">
                <button className='cursor-pointer'><FaSearch className='text-zinc-50' /></button>
                <Link href={"/login"} className="btn bg-[#e1ff51] text-[#00272c] text-xl">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;