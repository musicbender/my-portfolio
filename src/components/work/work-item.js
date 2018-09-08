import React from 'react';
import { IMG_PATH } from '../../config/config';
import './work-item.scss'

export default ({ item, i }) => {
  const { id, label, url, caption, thumb } = item;
  return (
    <div className={`work-item ${id}`}>
      <a className="pic-link" href={url} target="_blank">
        <img className="pic" src={`${IMG_PATH}/${thumb}`} alt={label} />
        <div className="caption">
          <svg
            className="bigTriangleColor caption-triangle"
            width="100%"
            height="100"
            viewBox="0 0 100 101"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L75 0 L100 100 Z" />
          </svg>
          <svg
            className="bigTriangleColor caption-triangle mobile"
            width="100%"
            height="100"
            viewBox="0 0 100 101"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L25 0 L100 100 Z" />
          </svg>
          <div className="caption-container">
            <h4 className="caption-title">{label}</h4>
            <p className="caption-body">{caption}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
