"use client";
import PrimaryButton from '@/components/shared/PrimaryButton';
import TrendingCourseCard from '@/components/shared/TrendingCourseCard';
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import courses from "@/data/courses.json"
import paginateArray, { pagination } from '@/lib/paginateArray';
import handleSearch from '@/lib/handleSearch';

const CoursesPage = () => {
    const cardsPerPage = 6;
    const [pageNumber, setPageNumber] = useState(1);

    const [filteredCourses, setFilteredCourses] = useState(courses);

    const [loading, setLoading] = useState(false);

    const [searchCoursesBy, setSearchCourses] = useState("");
    const paginationArr = pagination(filteredCourses, cardsPerPage);
    const currentCourses = paginateArray(filteredCourses, cardsPerPage, pageNumber);

    const filterCourses = () => {
        setLoading(!loading);
        if (searchCoursesBy === "") {
            setFilteredCourses(currentCourses);
        }
        const newFilteredCourses = handleSearch(courses, searchCoursesBy);
        setFilteredCourses(newFilteredCourses);
    }

    return (
        <div className='bg-[#00272c] flex flex-col justify-center items-center'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-10'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h2 className='text-2xl sm:text-4xl font-bold text-zinc-50 text-center'>
                        Popular Courses
                    </h2>
                    <div className='flex justify-between items-center gap-x-2'>
                        <label className="input">
                            <FaSearch className='' />
                            <input type="search" required placeholder="Search for courses" value={searchCoursesBy} onChange={e => setSearchCourses(e.target.value)} />
                        </label>
                        <button className='btn bg-[#e1ff51] text-[#00272c] text-xl font-bold hover:scale-110' onClick={() => filterCourses()}>Search</button>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16 pb-6'>
                {
                    currentCourses.map(course => (<TrendingCourseCard key={course.id} course={course} />))
                }
            </div>

            <div className="join self-center pb-4">
                {
                    paginationArr.map(number => <button key={number} className={`join-item btn ${number === pageNumber ? "bg-[#e1ff51] text-[#00272c]" : "bg-[#00272c] text-[#e1ff51]"}`} onClick={() => { setPageNumber(number) }}>{number}</button>)
                }
            </div>
        </div>
    );
};

export default CoursesPage;