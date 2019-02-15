import React, { Component } from 'react'
import { eventNames } from 'cluster';

class GifSearch extends React.Component {
    state= {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.send()
    }

    render() {
        return (
            <form>
                <input type="text" value="{this.state.value}" />
            </form>
        )
    }
}

export default GifSearch