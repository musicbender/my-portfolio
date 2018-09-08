import React from 'react';
import WorkItem from './work-item';
import work from '../../config/work.json';
import './work.scss';

export default (props) => {
  return (
    <section className="work-section">
        <svg className="bigTriangleColor separator-work" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L0 0 L30 100 L100 0 L100 100 Z" />
        </svg>
        <div className="work-container">
            <h2 id="work" className="work-header">Work</h2>
            <div className="container">
              {
                work.map((item, i) => (
                  <WorkItem item={item} i={i} key={item.id + i} />
                ))
              }
            </div>
            <h4 className="recommend-body">
              "Pat is technically creative, easy to work with and picks up on new concepts fast. He is an excellent candidate for a front-end developer role."
            </h4>
            <p className="recommend-name">&mdash;William Turner, Thinkful Mentor and Author at Focal Press</p>
        </div>
    </section>
  );
}
