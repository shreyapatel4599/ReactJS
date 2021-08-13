import React from 'react';
import CourseCard from './coursecard';

const TopCoursesSection = () => {
    return(
    <>
        <div className="heading">
            <h1>Our Courses</h1>
        </div>
        <div className="course-container">
            <CourseCard />
            <CourseCard />

            <CourseCard />

            <CourseCard />

        </div>
    </>
    );
}

export default TopCoursesSection;