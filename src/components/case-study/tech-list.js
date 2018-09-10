import React from 'react';
import Headline from '../_global/headline';
import './tech-list.scss';

export default ({ data }) => (
  <div className="tech-list-wrapper">
    <Headline text="Tech Stack" />
    <ul className="tech-list">
      {data.map(i => ( <li>{i}</li> ))}
    </ul>
  </div>
)
