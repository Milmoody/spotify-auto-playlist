import React, { Component } from 'react';
import Wrapper from './components/Wrapper.jsx';
import './scss/style.scss';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: 'TestUser',
      userID: 1,
      likedSongs: ['Hey', 'Mysteries'],
      numberPlaylists: 2,
      playlists: [{
          name: 'likedSongs',
          numSongs: 2000,
          playlistID: 1,
        },
        {
          name: 'Living Legends',
          numSongs: 30,
          playlistID: 2
        },
        {
          name: 'Folk Feels',
          numSongs: 15,
          playlistID: 3
        },
      ]
    }
  }

  render() {
    return(
      < Wrapper username={this.state.username} likedSongs={this.state.likedSongs} playlists={this.state.playlists} userID={this.state.userID}/>
    )
  }
}

export default App;