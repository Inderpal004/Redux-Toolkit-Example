import React from 'react';
import DeleteAllUser from './DeleteAllUser';
import { getData } from '../data';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/userSlice';
import ShowUsers from './ShowUsers';
import { useNavigate } from 'react-router-dom';

export default function Users() {

    const dispatch = useDispatch();
    const addNewUser = (name) => {
        dispatch(addUser(name));
    }

    const navigate = useNavigate();

  return (
    <div className='container'>
        <h1 className="heading">Users List</h1>

        <ul className="nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Section</li>
            <li className="nav-item">Tools</li>
            <li className="nav-item">Contact</li>
        </ul>

        <div className="user-container">
            <div className="heading-box">
                <h2 className="sm-heading">List of users Details</h2>
                <button onClick={()=> addNewUser(getData())} className='add-user'>Add User</button>
            </div>

            <ul className="user-list">
              <ShowUsers/>
            </ul>

            <hr />
            <div className='flex-end'>
                <DeleteAllUser/>
            </div>
        </div>

      <div className="center">
      <button onClick={()=> navigate("/counter")} className='navigate-btn'>Go to Count Page</button>
      </div>
      
    </div>
  )
}
