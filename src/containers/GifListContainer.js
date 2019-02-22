import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

    state = {
        gifList: [],
        query: ''
    }


    fetchGif = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                gifList: data.data.map((gif) => { 
                    return {url: gif.images.original.url}
                })
            })
        })
    }




    render() {
        return (
            <div>
                <GifSearch submitHandler={this.submitHandler} handleChange={this.handleChange} fetchGif={this.fetchGif}/>
                <GifList gifList={this.state.gifList}/>
            </div>
        )
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.fetchGif(this.state.query)
    }

    handleChange = (event) => {
        this.setState({query: event.target.value})
    }

}

export default GifListContainer