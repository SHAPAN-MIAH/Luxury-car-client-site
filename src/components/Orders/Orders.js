import React, { useEffect, useState } from 'react';
import OrderView from '../OrderView/OrderView';
import './Orders.css'

const Orders = () => {
    const [order, setOrder] = useState([]);
     useEffect(() => {
        fetch('https://pacific-waters-47599.herokuapp.com/Order')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])
    return (
        <div className="container orders-contain">
            <h5 className='orderTitle'>Your Order Details</h5>
            <div className="orderContainer">
            {
                order.map(order => <OrderView order={order}></OrderView>)
            }
            </div>
        </div>
    );
};

export default Orders;