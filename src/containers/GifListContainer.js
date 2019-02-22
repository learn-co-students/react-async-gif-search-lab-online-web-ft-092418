import React from 'react';
import GifList from '../components/GifList';

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
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer