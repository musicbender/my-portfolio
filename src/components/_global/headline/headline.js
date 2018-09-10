import React from 'react';
import './headline.scss';

const Headline = ({ text }) => ( <h3 className="headline"> {text} </h3> );

Headline.defaultProps = {
  text: ''
}

export default Headline;
