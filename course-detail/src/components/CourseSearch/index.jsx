import React, { useEffect, useState } from 'react';



const CourseSearch = ({ data, setCourse }) => {

    const [query, setQuery] = useState("")


    useEffect(() => {

        if (!query) {
            setCourse(data)
        }
        else {
            const filtereddata = data.filter(course => course.name.toLowerCase().includes(query.toLowerCase())
                || course.instructor.toLowerCase().includes(query.toLowerCase()))
            setCourse(filtereddata)
        }
    }, [query])

    return (
        <div className='search-bar mb-4'>
            <input
                type='text'
                placeholder='Search by course name or instructor...'
                className='form-control'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
        </div>
    )
}

export default CourseSearch
