import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  search = (string = 'cats') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({ 
        gifs: data.map( gif => ({ 
          url: gif.images.original.url 
        })) 
      })
    })
  }  

  render() {
    return <section>
      <GifSearch search={this.search}/>
      <GifList gifs={this.state.gifs}/>      
    </section>
  }

  componentDidMount() {
    this.search();
  }
}