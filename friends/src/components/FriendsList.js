import React from 'react';
import { connect } from 'react-redux';

class FriendsList extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className='list'>
        <h1>All My Friends</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friends

})

export default connect(
  mapStateToProps,
  {}
)(FriendsList);