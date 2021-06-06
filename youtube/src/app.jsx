import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const channelId = 'UC2fP4GE9B6O8_T8Lp82fnJQ'; //UC2fP4GE9B6O8_T8Lp82fnJQ 대방, UC0Qzngib6BwuBGoRZpL9YEw 전주
  const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDAqhAbNCGbjhFsTq9yMnW0qZBR7Pd1vg0&part=snippet&channelId=${channelId}&maxResults=20&order=date`;

  const search = query => {
    const searchUrl = `${url}&q=${query}`;
    console.log(`searchUrl : ${url}`);
    fetch(searchUrl, 
      requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setVideos(result.items);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    fetch(url, 
      requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setVideos(result.items);
      })
      .catch(error => console.log('error', error));

    return () => {
    }
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
