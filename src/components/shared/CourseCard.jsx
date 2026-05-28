import Image from 'next/image';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { CiStar } from "react-icons/ci";


const CourseCard = ({ course }) => {
    return (
        <div className="hover-3d">
            {/* content */}
            <div className="card lg:card-side bg-[#00272c] shadow-2xl border border-white/20 rounded-2xl">
                <figure className="w-60 rounded-2xl">
                    <Image src={course.image} alt="Image of the course subject" width={80} height={80} className='w-full'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-zinc-50">{course.title}</h2>
                    <p className='text-zinc-50'>{course.instructor}</p>
                    <div className="card-actions justify-end flex items-center gap-x-4">
                        <span className='text-xl text-[#e1ff51] flex items-center'><CiStar></CiStar>{course.rating}</span>
                        <PrimaryButton href={`/courses/${course.id}`}>Details</PrimaryButton>
                    </div>
                </div>
            </div>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>);
};

export default CourseCard;