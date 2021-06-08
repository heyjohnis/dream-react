import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const reset = () => {
    setSelectedVideo(null);
  }

  const selectVideo  = (video) => {
    setSelectedVideo(video); 
  }

  const search = query => {
    youtube.searchMovieList(query)
      .then( data => {
        setVideos(data);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube.movieList()
      .then( data => {
        setVideos(data);
      })
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onReset={reset} />
      <section className={styles.content}>
        {selectedVideo &&  (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid' } />
        </div>
      </section>
    </div>
  );
}

export default App;
