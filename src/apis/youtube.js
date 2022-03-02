import axios from "axios";

const KEY = "AIzaSyDEn0ju66gaxC8pyBL41BRxxyI1bQi06p4";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  type: "video",
  key: `${KEY}`,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
