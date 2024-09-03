import React, { useEffect, useState } from 'react'
import './index.css'
import CourseCard from '../coursecard/Index';
import { fetchCourses } from '../../store/courses';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../mocks/utils';
import CourseSearch from '../CourseSearch';


const CourseList = () => {

    const coursedata = useSelector((state) => state.courses.coursedata)
    
    const [course, setCourse] = useState(coursedata)

    useEffect(() =>{
      setCourse(coursedata)
    },[coursedata])

    
    return (
        <div className='course-display container my-5'>
        <h2 className='text-center mb-4'>Top Courses Near You</h2>
          <CourseSearch 
            data = {coursedata}
            setCourse={setCourse}
          />
        <div className='scrollable-list'>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {
              course.map((item, index) => (
              <div className='col' key={index}>
                <CourseCard
                    course={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
       
    )
}

export default CourseList;
