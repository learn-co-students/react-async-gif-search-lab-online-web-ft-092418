import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifUrls: []
        }        
    }

    componentDidUpdate() {
        console.log('updating')   
    }

    fetchGifs = (searchQ) => {
        fetch('http://api.giphy.com/v1/gifs/search?q=' + searchQ + '&api_key=dc6zaTOxFJmzC&rating=g')
            .then(response => {
                return response.json()
            })
            .then(myJson => {
                this.setState({gifUrls: myJson.data.slice(0, 3).map(gif => gif.images.original.url)})
            })
    }
    
    render () {
        
        return (<div>
            < GifSearch fetchGifs={this.fetchGifs}/>
            <GifList gifUrls={this.state.gifUrls} />

            </div>
        )
    }
        
}