import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './CarManagePanel.css'

const CarManagePanel = (props) => {
    const {name, model, price, _id} = props.car;

    const deleteCar = id => {
        axios.delete(`https://pacific-waters-47599.herokuapp.com/deleteCar/${id}`)
        .then(res => {
            console.log(res)
        })
        
    }
    return (
        <div className="carManageDtl">
            <table>
            <td><span>{name}</span></td>
            <td><span>{model}</span></td>
            <td><span>${price}</span></td>
            <span className="editIcon"><FontAwesomeIcon icon={faEdit} /></span> 
            <span onClick={() => deleteCar(_id)} className="deleteIcon"> <FontAwesomeIcon icon={faTrashAlt} /> </span>
            </table>

        </div>
    );
};

export default CarManagePanel;