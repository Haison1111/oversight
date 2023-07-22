import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { BiLibrary, BiTrendingUp } from "react-icons/bi"
import { MdRssFeed } from "react-icons/md"
import { TbPlayerPlayFilled } from "react-icons/tb"
import NavButton from '../NavButton/NavButton'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div ></div>
        <div>
        <NavButton to= "/" icon={<BiLibrary/>} title="Library"/>
        <NavButton to= "/player" icon={<TbPlayerPlayFilled/>} title="Player"/>
        <NavButton to= "/trending" icon={<BiTrendingUp/>} title="Trending"/>
        <NavButton to= "/feed" icon={<MdRssFeed/>} title="Feed"/>
        <NavButton to= "/favourite" icon={<AiOutlineHeart/>} title="Favourite" />
        </div>
        <div></div>
    </div>
  )
}

export default Sidebar