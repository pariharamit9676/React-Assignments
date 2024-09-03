import React, { useEffect } from 'react';
import './index.css';
import CourseCard from '../coursecard/Index';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourse } from '../../store/courses';


const CourseDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(selectCourse(Number(id)));
    }, [dispatch, id]);

    const course = useSelector((state) => state.courses.selectedCourse)
  
    console.log(course);
    
    if (!course) return <p>Loading...</p>;
    
  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8">
              <div className="bg-light rounded p-4 mb-4 shadow-sm">
                <h1 className="display-4 fw-bold mb-4">{course.name}</h1>
                <p className="lead mb-5">
                  {course.description}
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h4">Syllabus</h2>
                <div id="accordion">
                  <div className="card shadow-sm mb-3">
                    <div
                      className="card-header bg-light d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      href="#collapseOne"
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="fs-5 mb-0">{course.name}</span>
                      <small className="text-muted">{course.duration}</small>
                    </div>
                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                      <div className="card-body">
                        
                          {
                            course.syllabus.map((item,index) =>(
                              <div key={index}>
                               <p className="fw-bold mb-0">{item.week} | {item.topic}</p>
                             
                               <p className="text-muted p-1">
                               {item.content}
                             </p>
                             </div>
                            ))
                          }
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
              <div className="mb-5">
                <h2 className="h4">About This Course</h2>
                <div className="about-course p-4 bg-white rounded shadow-sm">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <div className="icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-book"></i>
                        </div>
                        <div>
                          <h5 className="mb-1 text-dark">Course Name</h5>
                          <p className="text-primary fs-5 mb-0">{course.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <div className="icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-user"></i>
                        </div>
                        <div>
                          <h5 className="mb-1 text-dark">Instructor</h5>
                          <p className="text-primary fs-5 mb-0">{course.instructor}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <div className="icon bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div>
                          <h5 className="mb-1 text-dark">Schedule</h5>
                          <p className="text-primary fs-5 mb-0">{course.schedule}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <div className="icon bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-clock"></i>
                        </div>
                        <div>
                          <h5 className="mb-1 text-dark">Duration</h5>
                          <p className="text-primary fs-5 mb-0">{course.duration}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex align-items-start p-3 bg-light rounded shadow-sm">
                        <div className="icon bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-list"></i>
                        </div>
                        <div>
                          <h5 className="mb-1 text-dark">Prerequisites</h5>
                          <ul className="text-muted fs-5 ps-3 mb-0">
                            {
                              course.prerequisites.map((item,index) =>(
                                <li key={index}>{item}</li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <CourseCard  
                course = {course}
              />
            </div>
          </div>
        </div>
      </div>
</div>
  );
}

export default CourseDetails;
