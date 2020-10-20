import axios from 'axios';

const KEY = 'AIzaSyAypWjNIElEFXkXfpUAc30w0EPWli-E7Xg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 3,
    key: KEY,
  }
});