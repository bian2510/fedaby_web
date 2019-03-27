import React, { Component } from 'react';
import './ListArticle.css';
import axios from 'axios'
import Article from './Article';

class ListArticle extends Component {
  constructor() {
    super()
    this.state = {data: null}
    this.loadArticles()
  }

  loadArticles = () => {
    let self = this
    axios.get('http://localhost:3001/articles')
      .then(function(response){
        self.setState({data: response.data})
      })
      .catch(function(error){
        return console.log(error)
      })
  }
  render() {
    if (this.state.data == null) {
      return(
        <h2>Cargando</h2>
      )
    }
    return(
      <div>
          {this.state.data.map((i, index) => <Article center key={index} articles={i} />)}
      </div>
    );
  }
}
export default ListArticle