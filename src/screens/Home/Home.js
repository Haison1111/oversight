import React , {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Favourite from "../Favourite/Favourite";
import Feed from "../Feed/Feed";
import Library from "../Library/Library";
import Player from "../Player/Player";
import Trending from "../Trending/Trending";
import "./Home.css";
import Sidebar from "../../component/Sidebar/Sidebar";
import { setClientToken } from "../../spotify";
import Login from "../Login/Login";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return (
    !token ? 
       <Login/>   :
     <div className="main-body">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
};

export default Home;
