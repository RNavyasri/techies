import React, { useState } from 'react';
import { Leaderboard } from './database';
import './board.css';
export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  const filteredLeaderboard = between(Leaderboard, period);

  return (
    <div className="board">
      <h1 className='leaderboard'>Leaderboard</h1>

      <div className="duration">
        <button onClick={handleClick} data-id='7'>7 Days</button>
        <button onClick={handleClick} data-id='30'>30 Days</button>
        <button onClick={handleClick} data-id='0'>All-Time</button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaderboard.slice(0, 10).map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter(val => {
    let userDate = new Date(val.dt);// eslint-disable-next-line 
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with ascending order
  return filter.sort((a, b) => b.score - a.score);
}