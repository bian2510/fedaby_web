import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Article extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div className="row">
        <div className="card text-center col-sm-6 center">
          <div className="card-header">
            {this.props.articles.username}
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.articles.title}</h5>
            <p className="card-text">{this.props.articles.content}</p>
            <Link to={`/articles/${this.props.articles.id}`} className="btn btn-primary">Go somewhere</Link>
          </div>
          <div className="card-footer text-muted">
            { this.props.articles.created_at }
          </div>
        </div>
      </div>
    )
  }
}

export default Article
//this.state.data.map( (elemento) => { <Componente parametro={elemento} /> } )