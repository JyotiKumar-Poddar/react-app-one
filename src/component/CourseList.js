import React from 'react';

function CourseList(props) {
    return (

        <table className='table'>
            <thead>
                <tr><td>Title</td>
                    <td>Author Id</td>
                    <td>Category</td>
                </tr>
            </thead>
            <tbody>
                {props.courses.map(course => {
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
    );
}

export default CourseList;