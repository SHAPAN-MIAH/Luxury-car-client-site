import React from 'react';
import { useHistory } from 'react-router-dom';
import './CarDtl.css'

const CarDtl = (props) => {
    const {name, model, price, imageUrl, _id} = props.car;

    const history = useHistory()
    const handelPurchase = id => {
        console.log("purchase clicked", id );
        history.push(`/checkout/${id}`)
    }
    
    return (
        <div className="carsDtl">
            <div className="imgContainer">
            <img src={imageUrl} alt=""/>
            </div>
            <div>
            <h5>{name}</h5>
            <h6>Model: {model}</h6>
            <h6>price: ${price}</h6>
            
            <button onClick={ () => handelPurchase(_id)} className='buyNow-btn'>Purchase</button>
            
            </div>
            
        </div>
    );
};

export default CarDtl;