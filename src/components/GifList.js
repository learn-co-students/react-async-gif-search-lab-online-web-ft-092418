import React from 'react'

class GifList extends React.Component {
    render() {
        return (
         <div>
             <ul>
                 {this.props.urls.map(g => <li><img src={g}/></li>)}
             </ul>
         </div>
    )
    }
    
}

export default GifList