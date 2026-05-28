import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';
import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="hero bg-[#00272c] min-h-screen px-6">

            <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center gap-10">
                <div>
                    <Image
                        src="/Banner.png"
                        alt='Student working on laptop'
                        width={900}
                        height={900}
                        className="
                        w-full
                        max-w-xs
                        sm:max-w-sm
                        md:max-w-md
                        lg:max-w-xl
                        h-auto
                        rounded-full
                        border
                        border-[#e1ff51]
                    "
                    />
                    <div className='absolute top-40 right-50 md:top-100 md:right-50 backdrop-blur-md bg-white/10 border border-white/20 rounded-full py-2 md:px-2 md:py-4 text-zinc-50 shadow-2xl z-20'>
                        UI/UX Design
                    </div>
                    <div className='absolute top-90 right-30 md:top-80 md:right-180 backdrop-blur-md bg-white/10 border border-white/20 rounded-full py-2 md:px-2 md:py-4 text-zinc-50 shadow-2xl z-20'>
                        Python
                    </div>
                    <div className='absolute top-60 right-5 md:top-160 md:right-160 backdrop-blur-md bg-white/10 border border-white/20 rounded-full py-2 md:px-2 md:py-4 text-zinc-50 shadow-2xl z-20'>
                        Web Dev
                    </div>
                </div>

                <div className="text-center lg:text-left">

                    <h1 className="
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        font-bold
                        text-zinc-50
                        leading-tight
                    ">Upgrade Your <br /><span className='text-[#e1ff51]'>Skills.</span> Elevate <br />Your <span className='text-[#e1ff51]'>Future.</span>
                    </h1>

                    <p className="
                        py-6
                        text-zinc-50
                        text-sm
                        sm:text-base
                    ">
                        Learn from industry{" "}
                        <span className='text-[#e1ff51]'>
                            experts
                        </span>{" "}
                        and advance <br className='hidden sm:block' />
                        your career with our top courses.
                    </p>

                    <div className='flex justify-center lg:justify-start gap-x-2 items-center'>
                        <PrimaryButton href={"/courses"}>
                            Explore
                            <FaLongArrowAltRight className='mt-1' />
                        </PrimaryButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;