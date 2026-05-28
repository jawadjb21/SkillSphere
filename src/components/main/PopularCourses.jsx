import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';
import popularCourse from "@/data/popularCourse.json";
import CourseCard from '../shared/CourseCard';
import Link from 'next/link';

const PopularCourses = () => {
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center px-16 py-10 bg-[#00272c]'>
                <div className='flex justify-between items-center w-full px-24 my-4'>
                    <h2 className='text-3xl font-semibold text-zinc-50'>Popular Courses</h2>
                    <Link href={"/courses"} className='text-[#e1ff51]'>All Courses</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4'>
                    {popularCourse.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
                </div>
            </div>
        </div >
    );
};

export default PopularCourses;