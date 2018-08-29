import React from 'react';
import FlickerArrows from '../_global/flicker-arrows';

export default () => {
  return (
    <section class="title-section">
      <div class="title-div">
        <h1 class="title unselectable">Pat<span class="jacobs">Jacobs</span></h1>
        <h3 class="subtitle unselectable">Full Stack Web Developer</h3>
      </div>
      <a href=#work class="arrows-link">
        <FlickerArrows />
      </a>
    </section>
  );
}
