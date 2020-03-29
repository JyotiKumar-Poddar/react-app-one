import React, { useState } from 'react'
import CourseForm from './CourseForm'

const ManageCoursePage = props => {

    const [course, setCourse] = useState({
        id: null,
        title: "",
        slug: '',
        authorId: null,
        categroy: ''
    });

    function hadleChange({ target }) {
        setCourse({
            ...course,
            [target.name]: target.value
        });
    }
    return (
        <div>
            <h2>Manage course</h2>
            <CourseForm course={course} onChange={hadleChange} />
        </div>
    );
}

export default ManageCoursePage;