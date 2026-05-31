    import React from 'react';
    import { SiTicktick } from "react-icons/si";

    const CourseOverview = ({ course }) => {
        const { overview, level, duration, price, students, certificate } = course;
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-x-4'>
                <div className='flex flex-col justify-start items-start gap-y-4 mt-4'>
                    <p className='text-white'>What you will learn:</p>
                    <div className='flex flex-col justify-start items-start gap-y-4'>
                        {
                            overview.map((overview, idx) => <span key={idx} className='flex justify-start items-center gap-x-2 gap-y-2 text-zinc-200'><SiTicktick className='text-[#e1ff51]' />{overview}</span>)
                        }
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start place-items-center gap-y-4 mt-4 w-full max-w-sm text-zinc-50 p-8 bg-[#00272c] shadow-2xl border border-white/20 rounded-2xl'>
                    <p className='w-full flex justify-between items-center gap-x-4 border-b border-b-white/10'><span className='text-zinc-400'>Price</span><span className=''>${price}</span></p>
                    <p className='w-full flex justify-between items-center gap-x-4 border-b border-b-white/10'><span className='text-zinc-400'>Level</span><span className=''>{level}</span></p>
                    <p className='w-full flex justify-between items-center gap-x-4 border-b border-b-white/10'><span className='text-zinc-400'>Duration</span><span className=''>{duration}</span></p>
                    <p className='w-full flex justify-between items-center gap-x-4 border-b border-b-white/10'><span className='text-zinc-400'>Students</span><span className=''>{students}</span></p>
                    <p className='w-full flex justify-between items-center gap-x-4 border-b border-b-white/10'><span className='text-zinc-400'>Certificate</span><span className=''>{certificate ? "Yes" : "No"}</span></p>
                </div>
            </div>

        );
    };

    export default CourseOverview;