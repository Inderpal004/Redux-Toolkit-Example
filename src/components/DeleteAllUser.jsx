import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllUsers } from '../store/slices/userSlice';

export default function DeleteAllUser() {

  const dispatch = useDispatch();
  const dltAllUsers = () =>{
      dispatch(deleteAllUsers());
  }

  return (
    <button onClick={dltAllUsers} className='dlt-all-user'>Delete All Users</button>
  )
}
