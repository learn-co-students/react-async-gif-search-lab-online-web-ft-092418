import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    gifList: [],
    query: ''
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
      this.props.gifFetch(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange} />
        <input type="submit" value="Find Gifs" />
      </form>
    )
  }
}
