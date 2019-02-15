import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state= {
        gifs = []
    }
    gifFetch = (data) => {
        fetch('http://api.giphy.com/v1/gifs/search?q=' + data + '&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response => response.json())
        .then(res => {
            this.setState({
                gifs: [res.data[0].images.original.url, res.data[1].images.original.url, res.data[2].images.original.url]
            })
        })
    }
    render() {
        return (
            <div>
                <GifList urls={this.state.gifList} />
                <GifSearch send={this.gifFetch} />
            </div>
        )
    }
}

export default GifListContainer