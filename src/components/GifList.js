import React, {Component} from "react"

export default class GifList extends Component {

  renderGifs = () => {
    return this.props.gifs.map(gif => {
      return <li key={gif.id}> <img src={gif.images.original.url} alt=""/>  </li>
    })
  }

  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    )
  }

}
