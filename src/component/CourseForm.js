import React from "react";
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'

function CourseForm(props) {
    let authors = [
        {
            authorId: 1,
            author: 'facebook'
        },
        {
            authorId: 2,
            author: 'React developer'
        },
    ]
    return (
        <form>
            <TextInput
                id="title"
                label="Title"
                name="title"
                value={props.course.title}
                onChange={props.onChange}
            />
            <SelectInput
                id="author"
                name="authorId"
                label="Author"
                value={props.course.authorId}
                onChange={props.onChange}
                data={authors}
            />
            <TextInput
                id="category"
                name="category"
                label="category"
                value={props.course.category}
                onChange={props.onChange}
            />
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default CourseForm;
