"use client";
import React, { useState } from 'react';
import CourseOverview from './CourseOverview';
import CurriculumView from './CurriculumView';

const CourseDetailsSection = ({ course }) => {
    const [selectedView, setSelectedView] = useState("overview");
    return (
        <div className='px-4 lg:px-8 pt-8'>
            <div className='flex justify-center items-center gap-x-4 md:gap-x-32 md:justify-start'>
                <span className={`${selectedView === "overview" ? "text-[#e1ff51] border-[#e1ff51]" : "text-zinc-400 border-transparent"}  px-8 py-4 text-xl md:text-2xl border-b-4 font-bold text-center md:text-left cursor-pointer`} onClick={() => { setSelectedView("overview") }}>Overview</span>
                <span className={`${selectedView === "curriculum" ? "text-[#e1ff51] border-[#e1ff51]" : "text-zinc-400 border-transparent"}  px-4 py-4 text-xl md:text-2xl border-b-4 font-bold text-center md:text-left cursor-pointer`} onClick={() => { setSelectedView("curriculum") }}>Curriculum</span>
            </div>
            <div className=''>
                {selectedView === "overview" ? <CourseOverview course={course}></CourseOverview> : <CurriculumView curriculum={course.curriculum}></CurriculumView>}
            </div>
        </div>
    );
};

export default CourseDetailsSection;