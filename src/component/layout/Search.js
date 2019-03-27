import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
  constructor() {
    super()
    this.state = {content: null }
  }

  findArticle = () => {
    let self = this
    axios.get(`http://localhost:3001/find_articles?content=${this.state.content}`)
      .then(function(response){
        console.log(response)
        console.log(self.state.content)
      })
      .catch(function(error){
        console.log(error)
      })
  }

  readInput = (e) => {
    this.setState({ content: e.target.value }, this.findArticle)
  }
  
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" onChange={this.readInput} type="search" placeholder="Search" aria-label="Search"/>
        <input className="btn btn-outline-success my-2 my-sm-0" type="submit"/>
      </form>
    )
  }
}

export default Search