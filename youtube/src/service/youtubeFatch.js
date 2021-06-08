class Youtube {
  

  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    this.channelId = 'UC2fP4GE9B6O8_T8Lp82fnJQ'; //UC2fP4GE9B6O8_T8Lp82fnJQ 대방, UC0Qzngib6BwuBGoRZpL9YEw 전주
    this.url = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&channelId=${this.channelId}&maxResults=20&order=date`;
  }

  async movieList() {
    const response = await fetch(this.url,
      this.requestOptions);
    const result_1 = await response.json();
    return result_1.items;
  }

  async searchMovieList(query) {
      const response = await fetch(`${this.url}&q=${query}`,
        this.requestOptions);
      const result_1 = await response.json();
      return result_1.items;
  }

}

export default Youtube;