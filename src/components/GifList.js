import React, { Component } from 'react';

class GifList extends Component {

    generateList = () => {
        return this.props.gifList.map((gif) => (<li>{<img src={gif.url}></img>}</li>))
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