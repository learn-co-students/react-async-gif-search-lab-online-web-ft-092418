import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

    state = {
        gifList: [],
        query: ''
    }

 
    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                gifList: data.map((gif) => { 
                    return {url: gif.images.original.url}
                })
            })
        })
    }




    render() {
        return (
            <div>
                <GifSearch submitHandler={this.submitHandler}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    submitHandler = (e) => {
        e.preventDefault()
        
    }

    handleChange = (event) => {
        this.setState({query: event.target.value})
    }

}

export default GifListContainer