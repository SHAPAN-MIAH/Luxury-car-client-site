import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const {id} = useParams();
    const [car, setCar] = useState({});
    const {name, model, price} = car;

    fetch(`https://pacific-waters-47599.herokuapp.com/cars/${id}`)
    .then(res => res.json())
    .then(data => setCar(data[0]))
    // .then(data => console.log(data[0]))

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)    
    const handelCheckOut = () => {
        const orderDtl = {...car, ...loggedInUser, orderTime: new Date()}
        console.log(orderDtl)

        axios.post('https://pacific-waters-47599.herokuapp.com/addOrder', orderDtl)
        .then(res => {
            if(res){
                alert('Your order successful!')
            }
        })
        

    }
    
    return (
        <div className="container">
            <h3 className="checkTitle">CheckOut</h3>
            <div className="checkOut">
            
                <div className="checkOut-title">
                    <h6>Name</h6>
                    <h6>Model</h6>
                    <h6>Price</h6>
                </div>
                <div className="checkOut-value">
                    <p>{name}</p>
                    <p>{model}</p>
                    <p>${price}</p>
                </div>
                <button onClick={handelCheckOut} id="checkOutBtn">CheckOut</button>
            </div>
            
        </div>
    );
};

export default CheckOut;