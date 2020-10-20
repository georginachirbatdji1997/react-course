import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('cats');

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos]);


  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}/>
      <VideoDetail video={selectedVideo}/>
      <VideoList onVideoSelect={setSelectedVideo}
                 videos={videos}/>
    </div>
  );
};

export default App;