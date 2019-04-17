import React, { Component } from 'react';

import FriendsList from './components/FriendsList';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FriendsList />
      </div>
    );
  }
}

export default App;
