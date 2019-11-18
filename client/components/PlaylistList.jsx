import React, { Component, useState } from 'react';
import PlaylistCard from './PlaylistCard.jsx';

class PlaylistList extends Component {
  render(){
    const playlists = this.props.playlists.map((playlist, id) => {
      return (
        <PlaylistCard key={id} playlist={playlist} />
      )
    })
    return(
    <div>
      <h3>Playlists</h3>
      <div id="playlist-div">
        {playlists}
      </div>
    </div>
    )
  }
}


export default PlaylistList;