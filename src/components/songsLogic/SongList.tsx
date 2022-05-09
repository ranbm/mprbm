import { SongItem } from './SongItem'
import React from 'react'

import './styles/SongList.css'
import { PlayerProps } from '../player/Player'

export const SongList = ({ songs, currentSong, setCurrentSong }:PlayerProps) => {
  return (
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
                {songs.map((song) =>
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

  )
}
