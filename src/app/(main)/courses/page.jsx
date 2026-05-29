import PrimaryButton from '@/components/shared/PrimaryButton';
import TrendingCourseCard from '@/components/shared/TrendingCourseCard';
import React from 'react';
import { FaSearch } from "react-icons/fa";
import course from "@/data/courses.json"

export const metadata = {
    title: "SkillSphere | Courses",
    description: "Browse all the courses of SkillSphere",
};


const page = () => {
    return (
        <div className='bg-[#00272c]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-10'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h2 className='text-2xl sm:text-4xl font-bold text-zinc-50 text-center'>
                        Popular Courses
                    </h2>
                    <div className='flex justify-between items-center gap-x-2'>
                        <label className="input">
                            <FaSearch className='' />
                            <input type="search" required placeholder="Search for courses" />
                        </label>
                        <PrimaryButton href={"#"}>Search</PrimaryButton>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 px-16 pb-6'>
                {course.map(course => (<TrendingCourseCard key={course.id} course={course} />))}
            </div>
        </div>
    );
};

export default page;