import { createSlice } from '@reduxjs/toolkit'


export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
   coursedata : [],
   selectedCourse: null,
    enrolledCourse:[],
  },
  reducers: {
    fetchCourses: (state, actions) => {
        state.coursedata = actions.payload.data;
    },

    selectCourse: (state, actions) => {
      state.selectedCourse = state.coursedata.find(course => course.id === actions.payload);
    },

    setEnrolledCourse: (state, actions) => {
      state.enrolledCourse = state.coursedata.filter(course => course.students.some(student => student.email === actions.payload));
    },
    
    markAsCompleted: (state, action) => {
        const { courseId } = action.payload;
        const updatedCourses = state.enrolledCourse.map(course => 
          course.id === courseId ? { ...course, completed: true } : course
        );
        state.enrolledCourse = updatedCourses;
      },

  },
})


export const { fetchCourses, selectCourse, setEnrolledCourse, markAsCompleted } = coursesSlice.actions

export default coursesSlice.reducer