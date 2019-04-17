import React from 'react';

const Header = props => {
  return (
    <nav>
      <div className='nav-left'>
        <p>Friends List</p>
      </div>

      <div className='nav-right'>
        <p>Login</p>
        <p>Logout</p>
      </div>
    </nav>
  )
}

export default Header;
