import React from 'react';
import CoursesPage from "@/components/courses/CoursesPage";

export const metadata = {
    title: "SkillSphere | Courses",
    description: "Browse all the courses of SkillSphere",
};

const page = () => {
    return (
        <CoursesPage></CoursesPage>
    );
};

export default page;