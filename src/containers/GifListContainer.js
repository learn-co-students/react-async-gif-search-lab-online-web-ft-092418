import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifUrls: [],
            searchQ: ''
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        fetch('http://api.giphy.com/v1/gifs/search?q=' + this.state.searchQ + '&api_key=dc6zaTOxFJmzC&rating=g')
            .then(response => {
                return response.json()
            })
            .then(myJson => {
                this.setState({gifUrls: myJson.data.slice(0, 3).map(gif => gif.images.original.url)})
            })
    }

    onSubmit = (query) => {
        console.log('from container: ', query)
        this.setState({
            searchQ: query
        })
    }

    render () {
        return (<div>
            < GifSearch onSubmit={this.onSubmit}/>
            <GifList gifUrls={this.state.gifUrls} />

            </div>
        )
    }
        
}