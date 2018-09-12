import React from 'react';
import FlickerArrows from '../_global/flicker-arrows';
import './header.scss';

const Header = ({ type, title, techList }) => (
  <section className="title-section">
    {
      type === 'main' &&
      <div className="title-div">
        <h1 className="title unselectable">Pat<span className="jacobs">Jacobs</span></h1>
        <h3 className="subtitle unselectable">Full Stack Web Engineer</h3>
      </div>
    }
    {
      type === 'subpage' &&
      <div className="subpage-title-div">
        <h1 className="subpage-title">
          {title}
        </h1>
      </div>
    }
  </section>
);

Header.defaultProps = {
  type: 'main'
}

export default Header;
