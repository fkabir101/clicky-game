import React from 'react'; 
import './style.css';
function ImageCard(props){
  return(
    <div className = "card card-overide" id ={props.id}>
      <div className = "card-body">
        <img src={props.image} alt="Cat"/>
        <button type="button" className="btn btn-primary btn-large" onClick={props.onValueChanged} id ={props.id}>Click</button>
      </div>
    </div>
  )
}

export default ImageCard;