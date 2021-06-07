import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  
  const search = query => {
    youtube.searchMovieList(query)
      .then(console.log);
  };

  useEffect(() => {
    youtube.movieList()
      .then(console.log);
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
