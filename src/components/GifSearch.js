import React, { Component } from 'react';

class GifSearch extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>
                    Search:
                    <input type="text" value={this.state.query} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch