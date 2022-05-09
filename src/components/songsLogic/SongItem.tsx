import './styles/SongItem.css'
import React, { useState } from 'react'
import { Song } from '../../data/Songs'
export type SongItemProps = {
    Song:Song,
    setCurrentSong(id:number):void,
    playNow: number|undefined
}

export const SongItem = ({ Song, setCurrentSong, playNow }:SongItemProps) => {
  const [, setLiked] = useState(false)
  const fontWeight = playNow === Song.id ? 'bold' : 'normal'
  const clickHandler = () => {
    setLiked(true)
  }
  const doubleClickHandler = () => {
    setCurrentSong(Song.id)
  }

  return (
        <tr className="song" style={{ fontWeight }} onDoubleClick={doubleClickHandler} key={Song.id}>
            <td className='title'>{Song.title}</td>
            <td className="artist">{Song.artist}</td>
            <td className="album">{Song.album}</td>
            <td className="duration">{Song.duration}</td>
            <td className="link"><a href={Song.link}>{Song.title}</a></td>
            <td>
                <button className="liked" onClick={clickHandler}>like</button>
            </td>
        </tr>

  )
}
