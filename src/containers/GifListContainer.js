import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  
  state = {
    gifList: []
  }

  gifFetch = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          gifList: data.map((gif)=> {
            return {url: gif.images.original.url}
          })
        })
      })
  }

  render() {
    return (
      <div>
        <GifList gifList={this.state.gifList} />
        <GifSearch gifFetch={this.gifFetch} />
      </div>
    )
  }
}