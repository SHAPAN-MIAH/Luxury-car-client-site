import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../images/car logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header">
            <nav className="container nav">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                    <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                    <Link to="/deals">Deals</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li> <Link to="/orders"><strong className="userNameInHeader"> {loggedInUser.name}</strong></Link> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;