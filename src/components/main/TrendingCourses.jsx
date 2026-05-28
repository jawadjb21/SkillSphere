import Link from 'next/link';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import CourseCard from '../shared/CourseCard';
import trendingCourse from "@/data/trendingCourses.json";
import TrendingCourseCard from '../shared/TrendingCourseCard';

const TrendingCourses = () => {
    return (
        <div className='bg-[#00272c]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>
                    <h2 className='text-2xl sm:text-3xl font-semibold text-zinc-50 text-center sm:text-left'>
                        Trending Courses
                    </h2>

                    <Link href={"/courses"} className='text-[#e1ff51] text-sm sm:text-base flex items-center gap-x-2'>
                        All Courses <FaLocationArrow className='text-sm' />
                    </Link>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                    {trendingCourse.map(course => (<TrendingCourseCard key={course.id} course={course} />))}
                </div>
            </div>
        </div>
    );
};

export default TrendingCourses;