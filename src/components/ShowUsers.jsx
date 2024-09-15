import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../store/slices/userSlice';

export default function ShowUsers() {

    const users = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const removeUser = (index) => {
        dispatch(deleteUser(index));
    }

    return (
        <>
            {
                users.length > 0 ? (
                    users.map((item, index) => {
                        return <li key={index} className='user'><span className='user-name'>{item}</span>  <button onClick={()=> removeUser(index)} className='dlt-btn'><i className="ri-delete-bin-5-line"></i></button></li>
                    })
                ) : <li className="user">No Users Found.</li>
            }
        </>
    )
}
