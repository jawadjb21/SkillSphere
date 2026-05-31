"use client";
import { ToastContainer } from 'react-toastify';
import React from 'react';
import handleEnroll from '@/lib/handleEnroll.js';

const EnrollButton = ({ children, courseTitle }) => {
    return (
        <>
            <button className="btn bg-[#e1ff51] text-[#00272c] text-xl font-bold hover:scale-110" onClick={() => handleEnroll(courseTitle)}>{children}</button>
            <ToastContainer />
        </>
    );
};

export default EnrollButton;