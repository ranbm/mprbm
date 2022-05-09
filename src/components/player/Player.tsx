import TimeTracker from './TimeTracker'
import { TitleAndTime } from './TitleAndTime'
import AllButtons from './AllButtons'
import './styles/Player.css'
import { Song } from '../../data/Songs'
import React from 'react'

export type PlayerProps = {
    songs:Song[],
    currentSong:number,
    setCurrentSong(id:number):void,
}
export const Player = ({ ...props }:PlayerProps) => {
  return (
        <div className="Player">
            <TitleAndTime {...props}/>
            <TimeTracker/>
            <AllButtons {...props}/>
        </div>)
}
