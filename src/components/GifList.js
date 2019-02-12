import React from 'react'

export default class GifList extends React.Component {


  render(){
    if (this.props.list.data && this.props.list.data.length >= 3){
      return (<ul>
        <li><img src={this.props.list.data[0].images.original.url}/></li>
        <li><img src={this.props.list.data[1].images.original.url}/></li>
        <li><img src={this.props.list.data[2].images.original.url}/></li>
        </ul>)
    }else{
      return(<div></div>)
    }
  }
}
