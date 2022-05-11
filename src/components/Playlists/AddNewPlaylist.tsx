import React from 'react'
import { Song } from '../../data/Songs'
export type PlayList = {
    name:string,
    songs:Song[],
}
export const AddNewPlaylist = () => {
  return (
        <div className="newPlaylistWrapper">
            <form>
                add playlist
            <fieldset>
                <label>
                    <p>Name</p>
                    <input type="text" name="playlistName" value={''}/>
                </label>
                <label>
                    <p>Songs</p>
                    <input type="array[]"
                    name="songsIndexes"
                    />
                </label>
                <label>
                    added songs
                </label>
            </fieldset>
            <button type="submit" >Submit</button>
                </form>
        </div>
  )
}
