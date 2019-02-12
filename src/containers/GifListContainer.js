import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state = {data: {}, searchString: ""}
  }

  searchCallBack = searchString => {
    this.setState({searchString: searchString})
  }

  componentDidUpdate(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchString}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json()).then(json => {
      console.log(json, "container")
      this.setState({data: json})
    })
  }

  render(){
    return (<div>
      <GifSearch callback={this.searchCallBack}/>
      <GifList list={this.state.data}/>
      </div>)
  }
}
