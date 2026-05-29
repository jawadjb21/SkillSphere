import React from 'react';

const handleSearch = (array, searchCourse) => {
    if (searchCourse === ""){
        return array;
    }
    const filteredCourses = array.filter(course => course.title.toLowerCase().includes(searchCourse.toLowerCase()))
    return filteredCourses;
};

export default handleSearch;