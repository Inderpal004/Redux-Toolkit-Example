import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../store/slices/counterSlice';
import { useNavigate } from 'react-router-dom';

function Count() {

    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addition = ()=>{
        dispatch(increase());
    }

    const subtraction = ()=>{
        dispatch(decrease());
    }

    return (
        <div className='container'>
            <h1 className="heading">Counter</h1>

            <div className="flex">
                <button onClick={addition} className="add"><i className="ri-add-fill count-btn"></i></button>
                <span className="count-heading">{count}</span>
                <button onClick={subtraction} className="minus"><i className="ri-subtract-fill count-btn"></i></button>
            </div>

            <div className="center">
            <button onClick={()=> navigate('/')} className="navigate-btn">Go to Users Page</button>
            </div>

        </div>
    )
}

export default Count
