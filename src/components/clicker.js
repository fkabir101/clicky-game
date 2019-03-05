import React, { Component } from 'react';
import imageRref from '../images/image-ref.json'
import ImageCard from './card/imageCard';
import InitialCard from './initialCard'
import './style.css'

class Clicker extends Component{

  state = {
    imageObject : {},
    score: 0,
    highScore: 0,
    firstLoad : true
  }
  componentWillMount = () =>{
    const originalImage = JSON.parse(JSON.stringify(imageRref));
    this.setState({imageObject : originalImage})
  }
  onValueChanged = (event) => {
    if(this.state.imageObject[event.target.id].clicked === false){
      let tempObject = this.state.imageObject;
      let currentScore = this.state.score
      currentScore++
      tempObject[event.target.id].clicked = true;
      
      for (let i = tempObject.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempObject[i], tempObject[j]] = [tempObject[j], tempObject[i]];
      }
      this.setState({imageObject : tempObject, score : currentScore})
    }
    else{
      alert("Already Clicked Try again")
      if(this.state.highScore < this.state.score){
        this.setState({highScore : this.state.score})
      }
      const originalImage = JSON.parse(JSON.stringify(imageRref));
      this.setState({imageObject : originalImage, score : 0})
    }
  }
  changeInitialLoad = () =>{
    this.setState({firstLoad : false})
  }


  render(){
    if(this.state.firstLoad === false){
      return(
        <div className = "wrapper">
          <h4>Score: {this.state.score}</h4>
          <h4>High Score: {this.state.highScore}</h4>
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
        </div>
      )
    }
    else{
      return(
        <div className = "wrapper">
          <InitialCard
            onValueChanged={this.changeInitialLoad}
          />
        </div>
      )
    }

  }
}

export default Clicker