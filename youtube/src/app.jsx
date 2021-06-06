import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const channelId = 'UC2fP4GE9B6O8_T8Lp82fnJQ'; //UC2fP4GE9B6O8_T8Lp82fnJQ 대방, UC0Qzngib6BwuBGoRZpL9YEw 전주
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDAqhAbNCGbjhFsTq9yMnW0qZBR7Pd1vg0&part=snippet&channelId=${channelId}&maxResults=20&order=date`, 
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
    <VideoList videos={videos} />
  );
}

export default App;
