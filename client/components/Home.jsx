import React, { Component, useState } from 'react';
import PlaylistList from './PlaylistList.jsx';


class Home extends Component {
  render(){
    
    return(
    <div>
      <h2>Spotify Playlist Creator</h2>
        <h3>Username: {this.props.username}</h3>
        <PlaylistList playlists={this.props.playlists} />
    </div>
    )
  }
}


export default Home;