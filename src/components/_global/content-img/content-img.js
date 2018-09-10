import React from 'react';
import { IMG_PATH } from '../../../config/config';
import './content-img.scss';

export default ({ data, title, url, index }) => {
  const { imgFile, caption } = data;
  const caseStudyDir = '/case-study/';
  return (
    <div className={`content-img-${index}`}>
      <a href={url} target="_blank">
        <img src={IMG_PATH + caseStudyDir + imgFile} />
        <div className="overlay">
          <p>Go to {title} <i className="fa fa-angle-right" /></p>
        </div>
      </a>
      <p className="media-caption">{caption}</p>
    </div>
  );
}
