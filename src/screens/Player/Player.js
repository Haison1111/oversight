import React, { useEffect, useState } from "react";
import "./Player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import Queue from "../../component/Queue/Queue";
import AlbumInfo from "../../component/Albuminfo/AlbumInfo";
import AudioPlayer from "../../component/Audioplayer/AudioPlayer";
import Loader from "../../component/Loader/Loader";
import isPlayingRn from "../../component/Context/Context";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playlistImages, setPlaylistImages] = useState([]);
  const [playlistInfo, setPlayListInfo] = useState([]);
  const [loading,setLoading] = useState(false);




  useEffect(() => {
    setLoading(true)
    if (location.state) {
      apiClient
        .get(`playlists/${location.state?.id}/tracks`)
        .then((response) => {
          setTracks(response.data.items);
          setCurrentTrack(response.data.items[0].track);
          apiClient.get(`playlists/${location.state.id}`).then((res) => {
            setPlaylistImages(res.data.images[0].url);
            setPlayListInfo(res.data);
            // console.log(response.data);
            
          });
          setLoading(false)
        });
    }
  }, [location.state]);
  
  

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  },[ currentTrack,currentIndex,tracks])
  


  return (
    loading?
     <Loader/> :
     
    <isPlayingRn.Provider>

    <div className="container-screen">
      <div className="queue-rightside">
        <AlbumInfo
          album={playlistImages}
          title={playlistInfo.name}
          songs={tracks.length}
        />
        <Queue 
        lists={tracks}
        setCurrentIndex={setCurrentIndex}
        />
        
      </div>
      <div className="player-area">
        <AudioPlayer 
         currentTrack = {currentTrack}
         currentIndex = {currentIndex}
         setCurrentIndex = {setCurrentIndex}
         total={tracks}
         />
         {console.log(currentTrack)}
      </div>
    </div>
    </isPlayingRn.Provider>
  );
};

export default Player;
