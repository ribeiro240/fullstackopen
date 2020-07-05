import React, { useState } from 'react';
import Button from './components/Button';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0));
  const [hasVotes, setHasVotes] = useState(false);
  const [maxVotesIndex, setMaxVotesIndex] = useState(0);
  const [anecdoteMostVoted, setAnecdoteMostVoted] = useState();

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  function nextAnecdote() {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  function addVote() {
    if (!hasVotes) setHasVotes(true);
    const votesArray = [...votes];
    votesArray[selected] += 1;
    setMaxVotesIndex(votes.indexOf(Math.max(...votes)))
    setAnecdoteMostVoted(anecdotes[maxVotesIndex]);
    setVotes([...votesArray]);
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={addVote} text="Vote" />
      <Button handleClick={nextAnecdote} text="Next Anecdote"/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdoteMostVoted}</p>
      <p>has {votes[maxVotesIndex]} votes</p>
    </div>
  )
}


export default App;
