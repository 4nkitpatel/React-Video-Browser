import axios from "axios";

const KEY = "AIzaSyAjw68uob5haCwQpBczGBdYoHGPrXd-iag";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 10,
    type: 'video',
    key: KEY,
  }
});
