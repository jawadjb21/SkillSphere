import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <section className="min-h-screen bg-[#00272c] flex items-center justify-center px-6">

            <div className="max-w-3xl w-full text-center">

                <div className="flex justify-center mb-8">
                    <Image
                        src="/logo.png"
                        alt="SkillSphere Logo"
                        width={90}
                        height={90}
                        className="drop-shadow-lg"
                    />
                </div>

                <h1 className="text-[120px] md:text-[180px] font-black leading-none text-[#e1ff51]">
                    404
                </h1>

                <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mt-2">
                    Page Not Found
                </h2>

                <p className="text-zinc-300 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
                    Looks like the page you’re searching for has graduated
                    and moved somewhere else.
                </p>

                <div className="w-40 h-1 bg-[#e1ff51] mx-auto rounded-full mt-8"></div>

                <div className="mt-10">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center bg-[#e1ff51] text-[#00272c] font-bold text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        Back To Home
                    </Link>
                </div>

                <div className="absolute top-20 left-10 w-72 h-72 bg-[#e1ff51]/10 blur-3xl rounded-full pointer-events-none"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#e1ff51]/10 blur-3xl rounded-full pointer-events-none"></div>

            </div>
        </section>
    );
};

export default NotFoundPage;