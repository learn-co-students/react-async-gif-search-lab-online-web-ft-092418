import React, { Component } from 'react'

export default class GifSearch extends Component {

    constructor() {
        super()

        this.state = {
            input: ''
        }
    }
    

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('from search: ', this.state.input)
        this.props.onSubmit(this.state.input)
    }
    
    
    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" name="input" value={this.state.input} onChange={event => this.handleInputChange(event)}></input>
                </form>
            </div>
        )
    }

}