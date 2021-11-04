import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserHeader = (props) => {

  const user = useSelector(state => state.auth.user)

  return (
    <>
      <Link to="/">link 1</Link>
      <Link to="/">link 2</Link>
      <Link to="/">link 3</Link>

      <span>{user.name}</span>

      <h2>This is the User Header</h2>
    </>
  )

}

export default UserHeader
