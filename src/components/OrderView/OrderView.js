import React from 'react';
import './OrderView.css'

const OrderView = (props) => {
    console.log(props)
    const {_id, name, email, orderTime, model, price} = props.order;
    return (
        <div className='orderViewDtl'>
            
            <div className="userInfo">
            <h5>User info</h5>
            <div>
            <p><span>User Id:</span> {_id}</p>
            <p><span>User Name:</span> {name}</p>
            <p><span>User Email:</span> {email}</p>
            <p><span>Order Time:</span> {orderTime}</p>
            </div>
            </div>
            
            <div className="carInfo">
            <h5>Car info</h5>
            <p><span>Car Model:</span> {model}</p>
            <p><span>Car Price:</span> {price}</p>
            </div>
            
        </div>
    );
};

export default OrderView;