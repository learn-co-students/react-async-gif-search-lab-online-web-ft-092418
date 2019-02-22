import React, { Component } from 'react';

class GifList extends Component {

    generateList = () => {
        return this.props.gifList.map((gif) => (<li>{console.log(gif)}</li>))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.generateList()}
                </ul>
            </div>
        )
    }
}

export default GifList