import React from 'react';

export default class CoordinatesButton extends React.Component {
  clickEvent = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (
      <button onClick={this.clickEvent}>Button</button>
    )
  }
}
