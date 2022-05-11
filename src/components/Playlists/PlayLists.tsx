import React from 'react'
import { AddNewPlaylist, PlayList } from './AddNewPlaylist'
import { DUMMY_SONGS } from '../../data/Songs'
import { PlayerProps } from '../player/Player'
import { SongList } from '../songsLogic/SongList'
export type PlayListsProps = {
  playlists: PlayList[],
  setVisible(val:boolean):void,
  visible:boolean
}
export const PlayLists = (props:PlayListsProps&PlayerProps) => {
  const test:PlayList[] = [{
    name: 'playlist name',
    songs: DUMMY_SONGS

  },
  {
    name: 'playlist 2',
    songs: DUMMY_SONGS

  }]
  const doubleClickHandler = () => {
    props.setVisible((!props.visible))
  }

  return (
      <div className={'div'}>
        <div style={{ textAlign: 'center', fontSize: 28 }}>
            Playlists

        </div>
          <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none', listStyleType: 'none' }}>{test.map(playlist => <li key={playlist.name} onDoubleClick={doubleClickHandler}>{playlist.name}</li>)}</ul>

        {props.visible
          ? (
            <SongList songs={test[0].songs} currentSong={-1} setCurrentSong={props.setCurrentSong} />)
          : (<div/>)
          }
        <AddNewPlaylist/>
      </div>
  )
}
