import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { markAsCompleted } from '../../store/courses';




const StudentDashboard = () => {

    const dispatch = useDispatch()
    const coursedata = useSelector((state) => state.courses.enrolledCourse)

    const handleMarkAsCompleted = (courseId) => {
        dispatch(markAsCompleted({ courseId }));
    };

    if(!coursedata) return <div>Data not found</div>



    return (

        <div className="container" style={{ height: 'auto', minHeight: '68vh' }}>
            <div className="dashboard">
                <h3 className="mb-4">Your Courses</h3>
                <div className="course-list">
                    {
                        coursedata.map((course, index) =>(
                            <div className="course-card-modern" key={index}>
                            <img src={"/"+ course.thumbnail} alt="Introduction to React" className="course-thumbnail-modern" />
                            <div className="course-details-modern">
    
                                <h5 className="course-title-modern">{course.name}</h5>
                                <p className="instructor-modern"><strong>Instructor: </strong>{course.instructor}</p>
                                <p className="due-date-modern"><strong>Due Date:</strong> September 30, 2024</p>
                                <div className="progress-container-modern">
                                    <div className="progress-modern">
                                        <div className="progress-bar-modern" style={{ width: course.completed ? '100%' : '50%' }}>{course.completed ? 'Completed' : '50%'}</div>
                                    </div>
                                </div>
                                <button 
                                        className="btn-complete-modern"
                                        onClick={() => handleMarkAsCompleted(course.id)}
                                    >
                                        {course.completed ? 'Completed' : 'Mark as Completed'}
                                    </button>
                            </div>
                        </div>
                        ))
                    }
                 
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
