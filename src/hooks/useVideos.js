import { useState, useEffect } from "react";
import youtube, { baseParams } from "../apis/youtube";

// This hook takes defaultsearch term or term to search as input
//and returns list of videos and way to search videos in form of O/P
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
