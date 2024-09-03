import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import StudentDashboard from './components/StudentDashboard';
import { useEffect, useState } from 'react';
import axiosInstance from './mocks/utils';
import { fetchCourses } from './store/courses';
import { useDispatch } from 'react-redux';

function App() {


  const dispatch = useDispatch()
  useEffect(() =>{
    ;(async() => {
      try {
        const response = await axiosInstance.get('/course-list'); // Mocked in development mode
         dispatch(fetchCourses(response.data))
      } catch (err) {
        console.log(err);
      }
    })()     
},[])


  return (
    <div>
     
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<CourseList />}/>
          <Route path='/course-detail/:id' element={<CourseDetails />}/>
          <Route path='/dashboard' element={<StudentDashboard />}/>
        </Routes>
      </Router>
     <Footer />
    </div>
   
    
  );
}

export default App;
