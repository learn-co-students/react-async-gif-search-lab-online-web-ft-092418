import React, { Component } from 'react';

class GifSearch extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.query} id="query" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch