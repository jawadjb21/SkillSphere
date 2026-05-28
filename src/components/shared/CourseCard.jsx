import Image from 'next/image';
import React from 'react';
import PrimaryButton from './PrimaryButton';

const CourseCard = ({ course }) => {
    return (
        <div className="hover-3d">
            {/* content */}

            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className="w-60 rounded-2xl">
                    <Image src={course.image} alt="Image of the course subject" width={100} height={100}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p>{course.instructor}</p>
                    <div className="card-actions justify-end">
                        <PrimaryButton href={`/courses/${course.id}`}></PrimaryButton>
                        <button className="btn btn-primary">Listen</button>
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