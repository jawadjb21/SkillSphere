import Image from 'next/image';
import React from 'react';

const RootLoading = () => {
    return (
        <section className="min-h-screen bg-[#00272c] flex items-center justify-center overflow-hidden relative">

            <div className="absolute w-96 h-96 bg-[#e1ff51]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col items-center relative z-10">

                <div className="relative">
                    <Image
                        src="/logo.png"
                        alt="SkillSphere Logo"
                        width={90}
                        height={90}
                        className="animate-bounce"
                    />

                    <div className="absolute inset-0 border-4 border-[#e1ff51] border-t-transparent rounded-full animate-spin"></div>
                </div>

                <h1 className="mt-8 text-4xl font-bold text-[#e1ff51]">
                    SkillSphere
                </h1>

                <p className="mt-4 text-zinc-300 text-lg tracking-wide">
                    Loading your learning experience...
                </p>

                <div className="flex gap-2 mt-6">
                    <span className="w-3 h-3 rounded-full bg-[#e1ff51] animate-bounce"></span>

                    <span
                        className="w-3 h-3 rounded-full bg-[#e1ff51] animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                    ></span>

                    <span
                        className="w-3 h-3 rounded-full bg-[#e1ff51] animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                    ></span>
                </div>
            </div>
        </section>);
};

export default RootLoading;