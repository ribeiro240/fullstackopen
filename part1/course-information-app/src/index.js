import React from 'react';
import ReactDOM from 'react-dom';
const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Part = props => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = props => {
  return (
    <>
    <Part part="Fundamentals of React" exercises={10}/>
    <Part part="Using props to pass data" exercises={7}/>
    <Part part="State of a component" exercises={14}/>
    </>
  )
}

const Total = props => {
  return(
      <p>
        {props.text} {props.total}
      </p>
  )
}


const App = () => {
  const course = {
    name: "Full Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} part2={course.parts[1].name} exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total text="Number of exercises" total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
