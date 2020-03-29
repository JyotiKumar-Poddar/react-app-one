import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import HeaderPage from '../common/HeaderPage'
import CoursesPage from './CoursesPage'
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage"
import ManageCoursePage from './ManageCoursePage'
function App() {
    return (
        <div className='container-fluid'>
            <HeaderPage />
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/courses" component={CoursesPage}></Route>
                <Route path="/course/:slug" component={ManageCoursePage}></Route>
                <Route path="/course" component={ManageCoursePage}></Route>
                <Route path="/about" component={AboutPage}></Route>
                <Redirect from="/about-us" to="/about"></Redirect>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    )
}
export default App;