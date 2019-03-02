import React from 'react'; 
import './style.css';
function ImageCard(props){
  return(
    <div className = "card card-overide">
      <div className = "card-body">
        <img src={props.image} alt="Cat"/>
        <button type="button" class="btn btn-primary btn-large">Click</button>
      </div>
    </div>
  )
}

export default ImageCard;