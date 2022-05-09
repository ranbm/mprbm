import './App.css'
import React, { useState } from 'react'
import { DUMMY_SONGS, Song } from './data/Songs'
import { SongList } from './components/songsLogic/SongList'
import { Player } from './components/player/Player'

function App () {
  const [currentSongIdx, setCurrentSongIdx] = useState<number>(-1)
  const songs:Array<Song> = DUMMY_SONGS
  return (
        <div className="main">
            <Player songs={songs} currentSong={currentSongIdx} setCurrentSong={setCurrentSongIdx}/>
            <p>show this</p>
            <SongList songs={songs} currentSong={currentSongIdx} setCurrentSong={setCurrentSongIdx}/>
        </div>

  )
}
export default App
