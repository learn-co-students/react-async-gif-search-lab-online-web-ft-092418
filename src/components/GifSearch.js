import React from 'react'

export default class GifSearch extends React.Component {

  state = {
    query: ''
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.query)
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type='text' id='search' onChange={this.handleChange} value={this.state.query}/>
      <input type='submit'/>
    </form>
  }
}