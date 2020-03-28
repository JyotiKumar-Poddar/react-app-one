import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import HeaderPage from '../common/HeaderPage'
import CoursesPage from './CoursesPage'

function App() {
    function getPage() {
        const route = window.location.pathname;
        if (route === '/about') {
            return <AboutPage />
        }
        if (route === '/courses') {
            return <CoursesPage />
        }
        return <HomePage />
    }
    return (
        <div className='container-fluid'>
            <HeaderPage />
            {getPage()}
        </div>
    )
}
export default App;