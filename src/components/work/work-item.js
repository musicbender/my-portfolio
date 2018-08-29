import React from 'react';
import { IMG_PATH } from '../../config/config';

export default ({ item, i }) => {
  const { id, label, url, caption, thumb } = item;
  return (
    <div class={`work-item ${id}`}>
      <a class="pic-link" href={url} target="_blank">
        <img class="pic" src={`${IMG_PATH}/${thumb}`} alt={label} />
        <div class="caption">
          <div class="caption-container">
            <h4 class="caption-title">{label}</h4>
            <p class="caption-body">{caption}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
