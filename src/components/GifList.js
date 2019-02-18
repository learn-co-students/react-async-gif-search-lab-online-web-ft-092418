import React from 'react'

export default class GifList extends React.Component {

  render() {
    return <ul>
      {this.props.gifs.map(gif => {
        return <li key={gif.url}><img alt='gif' src={gif.url} /></li>
      })}
    </ul>
  }
}