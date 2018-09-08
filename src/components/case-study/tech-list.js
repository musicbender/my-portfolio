import React from 'react';
import './tech-list.scss';

export default ({ data }) => (
  <div className="tech-list-wrapper">
    <h3>Tech Stack</h3>
    <ul className="tech-list">
      {data.map(i => ( <li>{i}</li> ))}
    </ul>
  </div>
)
