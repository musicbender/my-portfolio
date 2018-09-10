import React from 'react';
import { VIDEO_PATH } from '../../../config/config';
import './content-video.scss';

export default ({ data, index }) => {
  const { videoFile } = data;
  const caseStudyDir = '/case-study/';
  return (
    <div className={`content-video-${index}`}>
      <video id={`video-${index}`} loop>
        <source src={VIDEO_PATH + caseStudyDir + videoFile} />
      </video>
    </div>
  );
}
