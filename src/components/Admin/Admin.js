import { faCog, faEdit, faPlus, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Admin.css'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        const carData = {
            name : data.name,
            model: data.model,
            price: data.price,
            imageUrl: imageUrl
        };
        console.log(carData)
        axios.post('https://pacific-waters-47599.herokuapp.com/addCar', carData)
        .then(res => console.log("response", res))
        
    };

    const handelImgUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '282791da900bc047d811a5c2dcf9f3f5');
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(res => setImageUrl(res.data.data.display_url))
        .catch(err => console.log(err))
    }

    return (
        <div className="container adminPanel">
            
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
            <div>
            <h3 className="addTitle">Add Cars</h3>
            <div className="form-container">
            <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input name="name" type="text" placeholder="Car Name" ref={register} required/>
            <br/>
            <input name="model" type="text" placeholder="Car Model" ref={register} required/>
            </div>
            
            <div>
            <input name="price" type="text" placeholder="Car Price" ref={register} required/>
            <br/>
            <input id="imgInput" name="image" type="file" onChange={handelImgUpload} />
            </div>
            
            <input id="addButton" type="submit"/>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Admin;