import axios from "axios";

const KEY = "YOUR_YOUTUBE_API_KEY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 10,
    type: 'video',
    key: KEY,
  }
});
