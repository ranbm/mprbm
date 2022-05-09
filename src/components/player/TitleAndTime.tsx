
import React from 'react'
import { PlayerProps } from './Player'

export const TitleAndTime = ({ songs, currentSong }:PlayerProps) => {
  if (currentSong !== -1) {
    return (
    <p>{songs[currentSong].title}</p>
    )
  } else {
    return (<p>hi and welcome</p>)
  }
}
