import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Playcard from "../../component/Playcard/Playcard";
import apiClient from "../../spotify";
import "./Library.css";

const Library = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigator = useNavigate();

  const playPlaylist = (id) => {
    navigator("/player", { state: { id: id } });
  };
  
  const albumList = playlists.map((playlist) => (
    <Playcard
      id={playlist.id}
      images={playlist.images[0].url}
      name={playlist.name}
      songs={playlist.tracks.total}
      handleClick={() => playPlaylist(playlist.id)}
    />
    
  ))
  
  return (
    <div className="container-screen">
      <div className="library-body">
        {albumList}
      </div>
    </div>
  );
};

export default Library;
