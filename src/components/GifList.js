import React from 'react';

const GifList = (props) => {
  //console.log(props);

  return(
    <div>
      <ul>
      {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" /> )}
      </ul>
    </div>
  )

}
export default GifList
