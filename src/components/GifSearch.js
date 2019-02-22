import React, { Component } from 'react';

class GifSearch extends Component {

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>
            Search:
            <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default GifSearch