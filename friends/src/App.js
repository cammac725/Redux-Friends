import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to='/friends-list'>Friends List</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </nav>

        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends-list' component={() => <FriendsList friends={this.props.friends} />} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, {})(App);
