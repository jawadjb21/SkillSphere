import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import navLinks from "@/data/navLinks.json";
import NavLinkFooter from "./NavLinkFooter";

const Footer = () => {
    return (
        <footer className="bg-[#00272c] text-zinc-100 border-t border-[#e1ff51]/20">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="SkillSphere Logo"
                            width={30}
                            height={30}
                            className="mt-2"
                        />

                        <h2 className="text-3xl font-bold text-[#e1ff51]">
                            <Link href={"/"}>SkillSphere</Link>
                        </h2>
                    </div>

                    <p className="text-zinc-300 leading-relaxed">
                        Upgrade your skills with industry-leading courses,
                        expert instructors, and hands-on learning experiences.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-[#e1ff51] mb-4">
                        Quick Links
                    </h3>

                    <ul className="flex flex-col space-y-3">
                        {navLinks.map(navLink => <NavLinkFooter key={navLink.id} navLink={navLink}></NavLinkFooter>)}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-[#e1ff51] mb-4">
                        Contact
                    </h3>

                    <div className="space-y-3 text-zinc-300">
                        <p>Email: support@skillsphere.com</p>
                        <p>Phone: +1 (234) 567-890</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e1ff51] text-[#00272c] p-3 rounded-full hover:scale-110 transition-transform"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e1ff51] text-[#00272c] p-3 rounded-full hover:scale-110 transition-transform"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e1ff51] text-[#00272c] p-3 rounded-full hover:scale-110 transition-transform"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e1ff51] text-[#00272c] p-3 rounded-full hover:scale-110 transition-transform"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#e1ff51]/10 py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-zinc-400">

                    <p>
                        © 2026 SkillSphere. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            href="/terms"
                            className="hover:text-[#e1ff51] transition-colors"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            href="/privacy"
                            className="hover:text-[#e1ff51] transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;