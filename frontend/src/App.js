import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UsersList from './components/users-list.component'
import Searchitem from './components/search-item.component'
import LoginSignup from  './components/login-signup.component'

function toggle(){
  var element = document.getElementById("main_nav");
  element.classList.toggle("rounded-pill");
  element.classList.toggle("rounded-lg");
}


function App() {
  return (
    <Router>
        <nav id="main_nav" className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top rounded-pill m-2 p-4 shadow-lg h3">
          <div class="container-fluid">
            <button className="navbar-toggler" type="button" onClick={toggle} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link to="/" className="navbar-nav h2 navbar-center">MARKET PLACE</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto navbar-left">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/new" className="nav-link">Create User </Link>
                </li>
              </ul>
              {/* <ul className="navbar-nav navbar-right">
                <li>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </li>
              </ul> */}
              <ul className="navbar-nav navbar-right">
                <li className="nav-item">
                  <Link to="/search" className="nav-link" href="#">Hey USERNAME!</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">My Profile</a>
                    <a className="dropdown-item" href="#">My Orders</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Logout</a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </nav>
        <div className="container-fluid">
          <div className="row justify-content-center align-center">
            <div className="col-auto">
              <Route path="/" exact component={UsersList}/>
              <Route path="/search" component={Searchitem}/>
              <Route path="/new" component={LoginSignup}/>
            </div>
          </div>
          <p>
            
          </p>
          <br/>
        </div>
       
    </Router>
  );
}

export default App;
