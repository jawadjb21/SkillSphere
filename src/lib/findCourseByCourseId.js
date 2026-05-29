import React from 'react';
import courses from "@/data/courses.json";


const findCourseByCourseId = (courseId) => {
    const course = courses.filter(course => course.id === courseId);
    if(Array.isArray(course)){
        return course[0];
    }
};

export default findCourseByCourseId;