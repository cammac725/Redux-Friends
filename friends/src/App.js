import React from 'react';
import { Route, NavLink } from 'react-router-dom'

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

const App = () => {

  return (
    <div>
      <nav>
        <NavLink to='/friends-list'>Friends List</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </nav>

      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friends-list' component={FriendsList} />
    </div>
  );
}

export default App;
