import React from 'react';
import FlickerArrows from '../_global/flicker-arrows';
import './header.scss';

export default () => (
  <section className="title-section">
    <div className="title-div">
      <h1 className="title unselectable">Pat<span className="jacobs">Jacobs</span></h1>
      <h3 className="subtitle unselectable">Full Stack Web Engineer</h3>
    </div>
    <a href="#work" className="arrows-link">
      <FlickerArrows />
    </a>
  </section>
);
