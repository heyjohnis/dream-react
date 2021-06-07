class Youtube {
  

  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    this.channelId = 'UC2fP4GE9B6O8_T8Lp82fnJQ'; //UC2fP4GE9B6O8_T8Lp82fnJQ 대방, UC0Qzngib6BwuBGoRZpL9YEw 전주
    this.url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDAqhAbNCGbjhFsTq9yMnW0qZBR7Pd1vg0&part=snippet&channelId=${this.channelId}&maxResults=20&order=date`;
  }

  movieList() {
    return fetch(this.url, 
      this.requestOptions)
      .then(response => response.json())
      .then(result => result.item)
      .catch(error => console.log('error', error));
  }

  searchMovieList(query) {
    return fetch(`${this.url}&q=${query}`, 
      this.requestOptions)
      .then(response => response.json())
      .then(result => result.items)
      .catch(error => console.log('error', error));
  }

}

export default Youtube;