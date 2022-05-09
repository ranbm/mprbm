import { SongItem } from './SongItem'
import React, { useState } from 'react'
import SongFilter from './SongFilter'
import './styles/SongList.css'
import { PlayerProps } from '../player/Player'

export const SongList = ({ songs, currentSong, setCurrentSong }:PlayerProps) => {
  const [filteredArtist, setFilteredArtist] = useState('')

  const filterChangeHandler = (selectedArtist:string) => {
    setFilteredArtist(selectedArtist)
  }

  const filteredSongList = songs.filter(song => {
    return song.artist === filteredArtist
  })

  const previewSongs = filteredSongList.length > 0 ? filteredSongList : songs

  return (
        <div>
            <SongFilter
                selected={filteredArtist}
                onChangeFilter={filterChangeHandler}
            />
            <table className="songList">
                <thead className="songListTableHead">
                <tr className="headRow">
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Duration</th>
                    <th>Deezer link</th>
                    <th>like</th>
                </tr>
                </thead>
                <tbody className="songListTableBody">
                {previewSongs.map((song) =>
                        <SongItem
                            Song={song}
                            playNow={currentSong}
                            setCurrentSong={setCurrentSong}
                            key={song.id}
                            />
                )
                }
                </tbody>

            </table>
        </div>
  )
}
