import React, {Component} from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"
export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  // componentDidMount() {
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
  // }

  getGifs = query => {
    console.log("handleSubmit")
    console.log(query)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(resp => {
      this.setState({
        gifs: resp.data.slice(0,3)
      })
    })
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch getGifs={this.getGifs}/>
      </div>
  )}


}
