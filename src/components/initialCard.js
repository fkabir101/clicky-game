import React from 'react';

function InitialCard (props){
  return(
    <div className = "card card-overide">
    <div className = "card-body">
      <h5 class="card-title">Clicky Game</h5>
      <p>Click on each card to score a point but don't click the same card twice or else its game over</p>
      <button type="button" className="btn btn-primary btn-large" onClick={props.onValueChanged}>Start</button>
    </div>
  </div>
  )
} 

export default InitialCard