import './App.css'
import React, { useState } from 'react'
import NewSearch from './components/newSearch/NewSearch'
import { DUMMY_SONGS, Song } from './data/Songs'
import { SongList } from './components/songsLogic/SongList'
import { Player } from './components/player/Player'

function App () {
  const [currentSong, setCurrentSong] = useState<number>(-1)

  const songs:Array<Song> = DUMMY_SONGS
  return (
        <div className="main">
            <NewSearch/>
            <Player songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
            <p>show this</p>
            <SongList songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
        </div>

  )
}
export default App
