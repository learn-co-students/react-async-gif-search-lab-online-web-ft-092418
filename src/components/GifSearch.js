import React from 'react'

export default class GifSearch extends React.Component {

  constructor(){
    super()
    this.state = {
      searchString: ""
    }
  }

  handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  handleSubmit = event => {
    event.preventDefault()
    this.props.callback(this.state.searchString)
  }

  render(){
    return (<form onSubmit={this.handleSubmit}>
      <input type="text" name="searchString" value={this.state.searchString} onChange={this.handleChange}/>
      <input type="submit" />
      </form>)
  }
}
