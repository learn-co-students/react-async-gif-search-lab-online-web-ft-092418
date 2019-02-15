import React, { Component } from 'react'

export default class GifList extends Component {

    renderLogic = () => {
        if (!this.props.gifUrls.length == 0) {
            return (<ul>
                <li><img src={this.props.gifUrls[0]}/></li>
                <li><img src={this.props.gifUrls[1]}/></li>
                <li><img src={this.props.gifUrls[2]}/></li>
            </ul>)
        }
    }

    render () {
        return (<div>
            {this.renderLogic()}
            </div>
        )
    }

}