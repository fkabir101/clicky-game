import React, { Component } from 'react';
import imageRref from '../images/image-ref.json'
import ImageCard from './card/imageCard';
import './style.css'

class Clicker extends Component{
  state = {
    imageObject : imageRref
  }
  render(){
    console.log(this.state.imageObject);
    return(
      <div className = "wrapper">
        {this.state.imageObject.map(image => (
          <ImageCard
            key={image.id}
            image={image.ref}
          />
        ))}
      </div>
    )
  }
}

export default Clicker