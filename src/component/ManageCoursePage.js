import React from 'react'

const ManageCoursePage = props => {
    return (
        <div>
            <h2>Manage course</h2>
            <p>{props.match.params.slug}</p>
        </div>
    );
}

export default ManageCoursePage;