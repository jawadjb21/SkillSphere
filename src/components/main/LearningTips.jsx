import React from 'react';
import learningTips from "@/data/learningTips.json";
import { FaCalendar, FaBookOpen } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";


const LearningTips = () => {
    return (
        <div className='flex flex-col gap-y-2 mb-12'>
            <h2 className='font-semibold text-3xl text-zinc-50 my-4'>Learning Tips</h2>
            <ul className='flex flex-col gap-y-2'>
                <li className='text-2xl font-semibold flex justify-start items-center gap-x-2 text-[#e1ff51]'><FaCalendar className='border border-[#e1ff51] rounded-md'/> Stay Consistent</li>
                <li className='text-2xl font-semibold flex justify-start items-center gap-x-2 text-[#e1ff51]'><FaLaptopCode className='border border-[#e1ff51] rounded-md'/> Build Projects</li>
                <li className='text-2xl font-semibold flex justify-start items-center gap-x-2 text-[#e1ff51]'><FaBookOpen className='border border-[#e1ff51] rounded-md'/> Take Notes</li>
            </ul>
        </div>
    );
};

export default LearningTips;