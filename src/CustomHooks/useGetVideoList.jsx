import React, { useEffect, useState } from "react";
import { YT_KEY, YT_URL } from "../assets/Constants";

const useGetVideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      try {
        let data = await fetch(YT_URL + YT_KEY);
        let jsonData = await data.json();
        console.log(jsonData);
        setVideos(jsonData.items); // Assuming the items property contains the video data
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    getVideos();
  }, []); 

  return videos;
};

export default useGetVideoList;
