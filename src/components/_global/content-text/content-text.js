import React from 'react';
import './content-text.scss';

export default ({ data, index }) => {
  const { p1, p2 } = data;
  return (
    <div className={`content-text-${index}`}>
      {p1 && <p>{p1}</p>}
      {p2 && <p>{p2}</p>}
    </div>
  );
}
