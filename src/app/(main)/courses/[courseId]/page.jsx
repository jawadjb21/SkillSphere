import CourseDetailsSection from '@/components/courses/CourseDetailsSection';
import PrimaryButton from '@/components/shared/PrimaryButton';
import findCourseByCourseId from '@/lib/findCourseByCourseId';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClock, FaSearch, FaUser, FaLevelUpAlt, FaStar } from 'react-icons/fa';


const CourseDetailsPage = async ({ params }) => {
    const { courseId } = await params;
    const course = findCourseByCourseId(Number(courseId));
    console.log(course);
    return (
        <div className='bg-[#011e22] flex flex-col justify-center items-center text-zinc-50'>
            <div className='max-w-7xl mx-auto lg:px-8 py-2 md:py-10 flex flex-col'>
                <div className="px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="flex items-center gap-2 text-sm sm:text-base mb-4">
                        <Link href="/courses" className="text-zinc-400 hover:text-[#e1ff51] transition-colors">All Courses</Link>
                        <span className="text-zinc-500">&gt;</span>
                        <span className="text-zinc-50 font-medium truncate">{course.title} </span>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between items-center gap-x-12  px-2'>
                    <div className="w-full lg:w-100 shrink-0 place-items-center">
                        <Image
                            src={course.image}
                            alt="Course image"
                            width={400}
                            height={250}
                            className="w-fit h-62.5 object-cover rounded-2xl"
                        />
                    </div>
                    <div className='flex flex-col flex-1 mt-4 md:mt-0 justify-center items-center lg:items-start gap-4'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center lg:text-left'>
                            {course.title}
                        </h2>
                        <div className='flex flex-row justify-between items-center gap-x-2 md:text-xl md:font-semibold'>
                            <span className='flex justify-between items-center gap-x-1'><FaUser className='text-green-300' />{course.instructor}</span>
                            <span className='flex justify-between items-center gap-x-1'><FaClock className='text-green-300' />{course.duration}</span>
                            <span className='flex justify-between items-center gap-x-1'><FaLevelUpAlt className='text-green-300' />{course.level}</span>
                        </div>
                        <span className='flex justify-between items-center gap-x-2 font-semibold md:text-xl'><span className='text-[#e1ff51] flex justify-between items-center gap-x-2'><FaStar />{course.rating}</span> ({course.reviewsCount} reviews)</span>
                        <p className='font-semibold text-lg text-center lg:text-left'>{course.description}</p>
                        <PrimaryButton href={"#"}>Enroll</PrimaryButton>
                    </div>
                </div>
                <CourseDetailsSection course={course}></CourseDetailsSection>
            </div>
        </div>
    );
};

export default CourseDetailsPage;