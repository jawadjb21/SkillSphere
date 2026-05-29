import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';
import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="hero bg-[#00272c] min-h-[50vh] md:min-h-[80vh] px-6">

            <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center gap-10">
                <div className='hidden md:block'>
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
                </div>

                <div className="text-left lg:text-left">

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

                    <div className='flex justify-start gap-x-2 items-center'>
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