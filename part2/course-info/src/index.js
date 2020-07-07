import React from 'react';
import ReactDOM from 'react-dom';
import Course from './Components/Course'



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        },
        {
          name: 'State of a component',
          exercises: 14
        },
        {
          name: 'State of a component',
          exercises: 14
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const coursesComponents = courses.map((course => <Course key={course.name} course={course} />))

  return (
  <div>
    {coursesComponents}
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
