import React, { Component } from 'react';

class GifSearch extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.submitHandler}>
                    <input type="text" value={this.props.query} id="query" onChange={this.props.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch