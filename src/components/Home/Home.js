import React, { useEffect, useState } from 'react';
import CarDtl from '../CarDtl/CarDtl';
import "./Home.css"

const Home = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://pacific-waters-47599.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])

    return (
        <div className="container">
            
            <h1 className="homeTitle">Chose Your <span>Luxury Car</span></h1>
            <div className="cars-container">
            {
                cars.map(car => <CarDtl car={car}></CarDtl>)
            }

            </div>
            <footer>
                <p>Copyright © 2021 Luxury-car</p>
            </footer>
        </div>
        
    );
};

export default Home;