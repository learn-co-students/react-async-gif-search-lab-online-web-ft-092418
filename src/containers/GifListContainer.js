import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

 
    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <GifSearch submitHandler={this.submitHandler}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    submitHandler = () => {

    }

}

export default GifListContainer