import Image from 'next/image';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { CiStar } from 'react-icons/ci';

const TrendingCourseCard = ({ course }) => {
    return (
        <div className="card bg-[#00272c] w-full max-w-sm mx-auto shadow-2xl border border-white/20 rounded-2xl">
            <figure className="w-full h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                <Image
                    src={course.image}
                    alt="Image of the course subject"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-zinc-50 w-50">{course.title}</h2>
                <p className='text-zinc-50'>{course.instructor}</p>
                <div className="card-actions justify-end flex items-center gap-x-4">
                    <span className='text-xl text-[#e1ff51] flex items-center'>{course.rating}<CiStar className='mt-0.5'></CiStar></span>
                    <PrimaryButton href={`/courses/${course.id}`}>Details</PrimaryButton>
                </div>
            </div>
        </div>);
};

export default TrendingCourseCard;