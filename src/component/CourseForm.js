import React, { useEffect, useState } from "react";
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import { getAuthors } from "../api/authorApi";
function CourseForm(props) {

    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        getAuthors().then(_authors => {
            setAuthors(_authors);
        });
    }, []);

    return (
        <form onSubmit={props.onSubmit} >
            <TextInput
                id="title"
                label="Title"
                name="title"
                value={props.course.title}
                onChange={props.onChange}
                error={props.errors.title}
            />
            <SelectInput
                id="author"
                name="authorId"
                label="Author"
                value={props.course.authorId}
                onChange={props.onChange}
                data={authors}
                error={props.errors.authorId}
            />
            <TextInput
                id="category"
                name="category"
                label="Category"
                value={props.course.category}
                onChange={props.onChange}
                error={props.errors.category}
            />
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default CourseForm;
