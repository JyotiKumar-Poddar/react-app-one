import React, { useState, useEffect } from 'react'
import CourseForm from './CourseForm'
import * as courseApi from '../api/courseApi'
import { toast } from 'react-toastify'

const ManageCoursePage = props => {

    const [errors, setErrors] = useState({});

    const [course, setCourse] = useState({
        id: null,
        title: "",
        slug: '',
        authorId: null,
        categroy: ''
    });

    useEffect(() => {
        const slug = props.match.params.slug;
        if (slug) {
            courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
        }
    }, [props.match.params.slug]);

    function hadleChange({ target }) {
        setCourse({
            ...course,
            [target.name]: target.value
        });
    }
    function formIsVaid() {
        const _errors = {}
        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author is required";
        if (!course.category) _errors.category = "Category is required";
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsVaid()) return;
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course added successfully!");
        });
    }
    return (
        <div>
            <h2>Manage course</h2>
            <CourseForm
                course={course}
                onChange={hadleChange}
                onSubmit={handleSubmit}
                errors={errors}
            />
        </div>
    );
}

export default ManageCoursePage;