import React from 'react';
import { NavLink } from "react-router-dom";

function HeaderPage() {
    const style = { color: 'orange' };
    return (
        <nav>
            <NavLink activeStyle={style} exact to="/">
                Home
            </NavLink> {" | "}
            <NavLink activeStyle={style} to="/courses">
                Courses
                </NavLink> {" | "}
            <NavLink activeStyle={style} to="/about">
                About
            </NavLink>
        </nav>
    );
}

export default HeaderPage;