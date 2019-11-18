import React, { Component, useState } from 'react';
import PlaylistList from './PlaylistList.jsx';

// const Wrapper = () => {
//   const [username, setUsername] = useState();
//   const [likedSongs, setLikedSongs] = useState();
//   return (
//     <div>
//       <h2>Spotify Playlist Creator</h2>
//       <ul>
//         <li>Username: {username}</li>
//         <li>Liked Songs: {likedSongs}</li>
//       </ul>
//     </div>
//   )
// }

class Wrapper extends Component {
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


export default Wrapper;