import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Header from './component/layout/Header';
import ListArticle from './component/article/ListArticle';
import SignIn from './component/session/SignIn';
import SignUp from './component/session/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Route exact path="/" component={ListArticle} />
          <Route exact path="/articles" component={Header} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
