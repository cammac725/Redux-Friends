import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
      .then(() => this.props.history.push('/friends-list'))
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type='text'
            name='username'
            value={this.state.credentials.username}
            placeholder='Username'
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            value={this.state.credentials.password}
            placeholder='Password'
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingData: state.fetchingData,
    error: state.error
  }
}

export default connect(mapStateToProps, { login })(Login);

