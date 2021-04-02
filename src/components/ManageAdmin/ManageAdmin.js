import { faCog, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarManagePanel from '../CarManagePanel/CarManagePanel';
import "./ManageAdmin.css"

const ManageAdmin = () => {
    const [cars, setCars] = useState([]);
     useEffect(() => {
        fetch('https://pacific-waters-47599.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className="container">
            <div className="manageAdmin-panel">
            <div className="adminNav">
                <li>
                <FontAwesomeIcon icon={faCog} />  <Link to="/ManageAdmin">Manage Cars</Link>
                </li>
                <li>
                <FontAwesomeIcon icon={faPlus} />  <Link to="/admin">Add Cars</Link>
                </li>
                <li>
                <FontAwesomeIcon icon={faEdit} />  <Link to="/update">Update Cars</Link>
                </li>
            </div>
            
             <div className="carManageContainer">
             <h4 className="manageTitle">Manage Cars</h4>
                <div className="managePanel-title"><strong>Name</strong> <strong>Model</strong> <strong>Price</strong> <strong>Action</strong></div>
                {
                    cars.map(car => <CarManagePanel car={car}></CarManagePanel>)
                }
            </div>
            </div>
        </div>
    );
};

export default ManageAdmin;