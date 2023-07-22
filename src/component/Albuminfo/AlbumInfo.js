import React from 'react';
import "./AlbumInfo.css"
const AlbumInfo = ({album,title,songs}) => {
  
  
  return (
    <div className='album-container'>
        <div className='album-images'>
          <img
           alt='album art'
           src = {album}/>
        </div>
        <div className='album-info'>
          <p className='album-title'> {title} </p>
          <p className='album-songs'> {songs} Songs </p>
        </div>
    </div>
  )
}

export default AlbumInfo