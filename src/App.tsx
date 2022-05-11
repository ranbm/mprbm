import './App.css'
import React, { useState } from 'react'
import { DUMMY_SONGS, Song } from './data/Songs'
import { SongList } from './components/songsLogic/SongList'
import { Player } from './components/player/Player'
import { PlayList } from './components/Playlists/AddNewPlaylist'
import { PlayLists } from './components/Playlists/PlayLists'

function App () {
  const test:PlayList[] = [{
    name: 'test',
    songs: DUMMY_SONGS

  }]
  const [currentSongIdx, setCurrentSongIdx] = useState<number>(-1)
  const [visible, setVisible] = useState<boolean>(false)
  const songs:Array<Song> = DUMMY_SONGS
  return (
        <div className="main">
            <Player songs={songs} currentSong={currentSongIdx} setCurrentSong={setCurrentSongIdx}/>
            <p>show this</p>
            <SongList songs={songs} currentSong={currentSongIdx} setCurrentSong={setCurrentSongIdx}/>
            <PlayLists songs={test[0].songs} playlists={test} currentSong={currentSongIdx} setCurrentSong={setCurrentSongIdx} visible={visible} setVisible={setVisible}/>
        </div>

  )
}
export default App
