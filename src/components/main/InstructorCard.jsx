import React from 'react';
import { FaCircleUser } from "react-icons/fa6";

const InstructorCard = ({ instructor }) => {
    return (
        <div className='border border-white/20 text-zinc-50 flex items-center justify-start gap-2 p-4 rounded-md'>
            <FaCircleUser /> {instructor.name}
        </div>
    );
};

export default InstructorCard;