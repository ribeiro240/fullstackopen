import React, { useState } from 'react';
import Stats from './components/Stats';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ positive, setPositive ] = useState(0);
  const [ averageScore, setAverageScore ] = useState(0);


  const neutralFeedback = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    positivePercent();
    averageFeedback();
  }

  const badFeedback = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    positivePercent();
    averageFeedback();
  }

  const averageFeedback = () => {
    const goodScore = good * 1;
    const neutralScore = 0;
    const badScore = bad * (-1);

    const average = (goodScore + neutralScore + badScore) / 3
    return setAverageScore(average);
  }
  const goodFeedback = () => {
    setGood(good + 1);
    setTotal(total + 1);
    positivePercent();
    averageFeedback();
  }

  const positivePercent = () => {
    if (total == 0) {
      setPositive(0);
    } else {
      setPositive(good/total * 100);
    }
  }

  return (
    <div>
      <Header text="Give Feedback" />
      <Button onClick={goodFeedback} text="good" />
      <Button onClick={neutralFeedback} text="neutral" />
      <Button onClick={badFeedback} text="bad" />
      <Header text="Statistics" />
      <>
      {(total > 0) ? (
        <table>
          <tbody>
          <Stats value={good} text="Good" />
          <Stats value={neutral} text="Neutral"/>
          <Stats value={bad} text="Bad"/>
          <Stats value={total} text="Total" />
          <Stats value={averageScore} text="Average" />
          <Stats value={positive + "%"} text="Positive" />
          </tbody>
        </table>
      ) : (
        <p>No Feedback Given</p>
      )}
      </>
    </div>
  );
}

export default App;
