

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

 const getBaseUrl = () => {
    const { protocol, hostname, port } = window.location;
    // Construct the base URL
    return `${protocol}//${hostname}${port ? `:${port}` : ''}`;
  };
const axiosInstance = axios.create({
  baseURL: getBaseUrl(), // Replace with your actual base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock Adapter setup: only activate this in development or under specific conditions

  const mock = new MockAdapter(axiosInstance);

  // Example: Mocking a GET request to '/endpoint'
  mock.onGet('/course-list').reply(200, {
    message: 'Success',
    data: [{
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'download.png',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
          },
          {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
          },
         
        ],
        students: [
          {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com'
          },
          {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com'
          },
        ]
      },
      {
        id: 2,
        name: 'Introduction to Express',
        instructor: 'Amit Singh',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Closed',
        thumbnail: 'download.png',
        duration: '13 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
          },
          {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
          },
         
        ],
        students: [
          {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com'
          },
          {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com'
          },
        ]
      },{
        id: 3,
        name: 'Introduction to React',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app. Learn the basics of React Native development and build your first mobile app. Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'in-progress',
        thumbnail: 'download.png',
        duration: '2 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to React',
            content: ' setting up your development environment.'
          },
          {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple responsive app using React components.'
          },
         
        ],
        students: [
          {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com'
          },
          {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com'
          },
        ]
      },
    ]
  });

  // You can add more mocked responses here


export default axiosInstance;