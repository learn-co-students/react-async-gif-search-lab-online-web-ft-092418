import React, { Component } from 'react'

import GifList from '../components/GifList' 
import GifSearch from '../components/GifSearch' 

class GifListContainer extends Component {

  state = {
    gifList: []
  }

  handleFormSubmission = (value) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + value + '&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(ret => { 
      this.setState({ gifList: [ret.data[0].images.original.url, ret.data[1].images.original.url, ret.data[2].images.original.url] })
  })}

  render() {
    return (
      <div>
        < GifList urls={this.state.gifList} />
        < GifSearch send={this.handleFormSubmission} />
      </div>
  )
  }
  
}

export default GifListContainer