import React, { Component } from 'react';
import './Header.css';
import Search from './Search'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Fedaby</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                
                <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/articles" className="nav-link">Articles<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">Profile<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/SignIn" className="nav-link">Login<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/SignUp" className="nav-link">Register<span className="sr-only">(current)</span></Link>
              </li>
            </ul>
            <Search/>
          </div>
        </nav>
    );
  }
}

export default Header;