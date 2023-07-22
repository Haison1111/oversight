import React, { useEffect, useState } from "react";
import "./Player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import Queue from "../../component/Queue/Queue";
import AlbumInfo from "../../component/Albuminfo/AlbumInfo";
import AudioPlayer from "../../component/Audioplayer/AudioPlayer";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playlistImages, setPlaylistImages] = useState([]);
  const [playlistInfo, setPlayListInfo] = useState([]);

  useEffect(() => {
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
        });
    }
  }, [location.state]);
  
  

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
    if ( currentTrack?.preview_url == null){
      if (currentIndex < tracks.length - 1) {
        alert("sample not avaliable - changing song")
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }
  },[ currentTrack,currentIndex,tracks])
  


  return (
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
  );
};

export default Player;
