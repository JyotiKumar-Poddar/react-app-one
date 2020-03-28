import React, { useState, useEffect } from 'react'
import { getCourses } from "../api/courseApi";


function CoursesPage() {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
    }, []);

    return (
        <>
            <h2>Courses</h2>
            <table className='table'>
                <thead>
                    <tr><td>Title</td>
                        <td>Author Id</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => {
                        return (
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </>
    );
}

export default CoursesPage;