import React, { Component } from 'react';
import { choice } from './helperBox';
import './Box.css';

class Box extends Component {
  constructor(props) { // need constructor if we're going to set some state
    super(props); // using props in constructor so need super(props);
    this.state = { color: choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }
  setColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }
  handleClick() {
    this.setColor();
  }
  render() {
    return (
      <div 
        className="Box"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick} >       
      </div>
    );
  }
}

export default Box;
