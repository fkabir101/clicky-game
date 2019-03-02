import React, { Component } from 'react';
import imageRref from '../images/image-ref.json'
import ImageCard from './card/imageCard';
import './style.css'


class Clicker extends Component{
  state = {
    imageObject : imageRref
  }

  onValueChanged = (event) => {
    if(this.state.imageObject[event.target.id].clicked === false){
      let tempObject = this.state.imageObject;
      tempObject[event.target.id].clicked = true;
      
      for (let i = tempObject.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempObject[i], tempObject[j]] = [tempObject[j], tempObject[i]];
      }

      this.setState({imageObject : tempObject})
    }
    else{
      alert("Already True")
    }
  }


  render(){
    return(
      <div className = "wrapper">
        {this.state.imageObject.map(image => (
          <ImageCard
            key={image.id}
            id={image.id}
            image={image.ref}
            onValueChanged={this.onValueChanged}
          />
        ))}
      </div>
    )
  }
}

export default Clicker