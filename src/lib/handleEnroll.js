import React from 'react';
import { toast } from 'react-toastify';
const handleEnroll = (courseTitle) => {
    toast.success(`Enrolled to ${courseTitle}!`)
};

export default handleEnroll;