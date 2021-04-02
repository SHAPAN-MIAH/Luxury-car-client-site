import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Deals from './components/Deals/Deals';
import ManageAdmin from './components/ManageAdmin/ManageAdmin';
import { createContext } from 'react';
import { useState } from 'react';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import CheckOut from './components/CheckOut/CheckOut';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header/>
            <Switch>
              <Route path="/home">
                <Home/>
              </Route>
              <PrivetRoute path="/orders">
                <Orders/>
              </PrivetRoute>
              <PrivetRoute path="/admin">
                <Admin/>
              </PrivetRoute>
              <PrivetRoute path="/checkout/:id">
                <CheckOut/>
              </PrivetRoute>
              <Route path="/ManageAdmin">
                <ManageAdmin/>
              </Route>
              <Route path="/deals">
                <Deals/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                
              </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
