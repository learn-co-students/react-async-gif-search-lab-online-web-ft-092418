import React, { Component } from 'react'

class GifSearch extends Component {
    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.send()
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </form>   
        )
    }

}

export default GifSearch