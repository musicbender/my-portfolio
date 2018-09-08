import React from 'react';

export default (props) => {
  return (
    <footer className="contact-section">
      <svg className="bigTriangleColor separator-contact" xmlns="https://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
          <path d="M0 0 L0 100 L70 0 L100 100 L100 0 Z" />
      </svg>
      <div className="contact-container">
        <h2 className="contact-header">Let's Talk</h2>
        <p className="contact-text">Considering me for an open position or project? Or just want to have a chat? Get a hold of me and let's talk!</p>
        <div className="social-media">
          <a href="https://www.github.com/musicbender" className="social-item" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a href="http://www.linkedin.com/in/patjacobsmusic" className="social-item" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/jatpacobs" className="social-item" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://soundcloud.com/patjacobsmusic" className="social-item" target="_blank">
            <i aria-label="soundcloud" className="fa fa-soundcloud soundcloud"></i>
          </a>
        </div>
        <div className="contact-btn-div">
          <a className="contact-me-btn" href="mailto:musicbender@gmail.com">
            <button className="button button--wayra button--inverted">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
