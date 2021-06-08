import React from 'react';

const VideoDetail = ({video}) => {
  const desc = video.snippet;
  return (
    <section>
        <iframe 
          type="text/html" 
          width="100%" 
          height="400px" 
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0" 
          allowFullScreen>
        </iframe>
        <div>
        <h2>{video.snippet.title}</h2>
        <h3><label>{desc.channelTitle}</label><span>{desc.publishTime}</span></h3>
        <p>{desc.description}</p>
      </div>
    </section>
  );
};

export default VideoDetail;