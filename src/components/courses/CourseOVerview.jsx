import React from 'react';
import { SiTicktick } from "react-icons/si";

const CourseOverview = ({ course }) => {
    const { overview, level, duration, price, students, certificate } = course;
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-x-4'>
            <div className='flex flex-col justify-start items-start gap-y-4 mt-4'>
                <p className='text-white'>What you will learn:</p>
                <div className='flex flex-col justify-start items-start gap-y-4'>
                    {
                        overview.map((overview, idx) => <span key={idx} className='flex justify-start items-center gap-x-2 gap-y-2 text-zinc-250'><SiTicktick className='text-[#e1ff51]' />{overview}</span>)
                    }
                </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-y-4 mt-4 md:mr-auto md:ml-100 text-zinc-50 p-8 bg-[#00272c] shadow-2xl border border-white/20 rounded-2xl'>
                <p className='flex justify-between items-center'>Price: ${price}</p>
                <p className='flex justify-between items-center'>Level: {level}</p>
                <p className='flex justify-between items-center'>Duration: {duration}</p>
                <p className='flex justify-between items-center'>Students: {students}</p>
                <p className='flex justify-between items-center'>Certificate: {certificate ? "Yes" : "No"}</p>
            </div>
        </div>

    );
};

export default CourseOverview;