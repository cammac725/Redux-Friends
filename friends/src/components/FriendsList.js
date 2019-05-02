import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';

import { getData } from '../actions';

class FriendsList extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log('friends: ', this.props.friends)
    return (
      <div className='friends-list'>

        <div className='friends'>
          {this.props.friends.map(item => (
            <div className='friend' key={item.id}>
              <h2>{item.name}</h2>
              <p>Age: {item.age}</p>
              <p>{item.email}</p>
            </div>
          ))}
        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ friends, fetchingData }) => ({
  friends,
  fetchingData
})

export default connect(
  mapStateToProps,
  { getData }
)(FriendsList);