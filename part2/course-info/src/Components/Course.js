import React from 'react';

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((s, p, i, arr) => {
    return s + arr[i].exercises
  }, 0);
  return(
    <p>Number of exercises {sum}</p>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  const parts = course.parts.map((coursePart, i) => <Part key={coursePart.name + i} part={coursePart} />)
  return (
    <div>
      {parts}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course;
