import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  let renderedList = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      video={video}
      key={video.id.videoId}
    />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
