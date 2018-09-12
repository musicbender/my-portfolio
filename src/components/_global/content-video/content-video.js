import React from 'react';
import { VIDEO_PATH } from '../../../config/config';
import './content-video.scss';

export default ({ data, index }) => {
  const { videoFile, caption } = data;
  const id = `video-${index}`;

  return (
    <div className={`content-video-${index}`}>
      <video
        id={id}
        width="640"
        height="360"
        controls
      >
        <source src={VIDEO_PATH + '/' + videoFile} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <p className="media-caption">{caption}</p>
    </div>
  );
}
