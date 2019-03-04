/* <GifList /> is a presentational component. It receives data from its props and renders html given the input data.*/

import React, { Component } from 'react'

export default class GifList extends Component {

    gifList= () => {
        return this.props.gifList.map((gif)=>(<li> <img src={gif.url} alt="gif" /> </li>)
        )
     }
 
    render() {
        return (
            <div>
                <ul>
                {this.gifList()}
                </ul>
            </div>
        )
    }
     
}
