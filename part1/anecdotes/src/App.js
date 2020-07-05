import React, { useState } from 'react';
import NextButton from './components/NextButton';

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  function nextAnecdote() {
    console.log(Math.random() * anecdotes.length)
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <NextButton handleClick={nextAnecdote}/>
    </div>
  )
}


export default App;
