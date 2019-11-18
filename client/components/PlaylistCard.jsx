import React, { Component, useState } from 'react';

class PlaylistCard extends Component {
  render(){
    return(
      <div className="playlist-card">
        <div className="playlist-card-name">{this.props.playlist.name}</div>
        <div className="playlist-card-numSongs">Number of Songs: {this.props.playlist.numSongs}</div>
        <div>{this.props.playlist.playlistID}</div>
        <button className="auto-playlist-button">Auto Playlist</button>
      </div>
    )
  }
}


export default PlaylistCard;