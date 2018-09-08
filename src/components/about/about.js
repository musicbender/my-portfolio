import React from 'react';
import { IMG_PATH } from '../../config/config';
import './about.scss';

export default (props) => {
  return (
    <section className="about-section">
      <svg className="bigTriangleColor separator-about" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 L0 0 L30 100 L100 0 L100 100 Z" />
      </svg>
      <div className="about-container">
        <h2 className="about-header">About</h2>
        <div className="about-mugshot-div">
          <img className="about-mugshot" src={`${IMG_PATH}/me_pic.jpg`} alt="Pat Jacobs" />
        </div>
        <div className="about-text-div">
            <p className="about-body">Hey, my name is Pat. I'm a web engineer based in sunny Orange County, California. Some of my favorite aspects of web development are making apps and tools, npm packages, reuseable react components, express APIs, writing tests (yes, you read that correctly) and bringing life to great designs. Currently I work as a front-end web enginner at the video game company NCSOFT.</p>
            <p className="about-body">I'm also into other things: roasting coffee, music composition, playing drums, teaching, gaming, woodworking, beer, making long lists, being a husband and father, and geeking out on life in general.</p>
        </div>
      </div>
    </section>
  );
}
