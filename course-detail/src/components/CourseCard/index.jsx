import React, { useContext } from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {

    return (

        <div>
            <Link to={`/course-detail/${course.id}`} className="course-card-link text-none" style={{textDecoration:"none"}}>
                <div className="course-card">
                    <img src={'/'+course.thumbnail} alt={course.name} />
                    <h5>{course.name}</h5>
                    <p><strong>Instructor:</strong> {course.instructor}</p>
                    <p><strong>Course Duration:</strong> {course.duration}</p>
                    <p><strong>Location:</strong> {course.location}</p>
                    <p><strong>Enrollment Status:</strong> <span className={`status status-${course.enrollmentStatus.toLowerCase()}`}>{course.enrollmentStatus}</span></p>
                </div>
            </Link>
        </div>
    )
}




export default CourseCard
