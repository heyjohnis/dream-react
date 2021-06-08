import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video, onVideoClick, display}) => {
  console.log("display", display);
  const displayType = display === 'list' ? styles.list : styles.grid;
  const data = video.snippet;
  return (
    <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
      <div className={styles.video}>
        <img className={styles.thumbnail} src={data.thumbnails.medium.url} alt={data.title} />
        <div className={styles.metadata}>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.channel}>{data.channelTitle}</p>
        </div>
      </div>
    </li>
  );

};

export default VideoItem;