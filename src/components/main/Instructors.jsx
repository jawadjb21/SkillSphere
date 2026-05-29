import React from 'react';
import instructor from "@/data/instructor.json";
import InstructorCard from './InstructorCard';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';

const Instructors = () => {
    return (
        <div className='mb-4 text-center'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <h2 className='font-semibold text-3xl text-zinc-50 my-4'>Top Instuctors</h2>

                <Link href={"/#"} className='text-[#e1ff51] text-sm sm:text-base flex items-center gap-x-2'>
                    View All <FaLocationArrow className='text-sm' />
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-5'>
                {
                    instructor.map(ins => <InstructorCard key={ins.id} instructor={ins}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;