import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

//baseado em: https://github.com/virtyaluk/react-fashion-watch/blob/master/src/ReactFashionWatch.jsx
class App extends Component {
  
  renderTime(name,time,ratio) {
    return (
      <Time name={name} time={time} ratio={ratio} />
    );
  }
  
  render() {
    return (
      <div className="App">
      <div className="time-div">
      {this.renderTime("Segundos", 10000, 60)}
      {this.renderTime("Minutos" , 10000, 60)}
      </div>
      </div>
    );
  }
}

let i =0;
class Time extends React.Component {
  
  constructor(){
    super();
    this.i = 0;
  }
  state = {
    currentDate: new Date(),
  };

  static PropTypes = {
    updateInterval: PropTypes.number
  };
  
  static defaultProps = {
    rounded: false,
    onTick: curTime => curTime,
    updateInterval: 100
  };
  
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), this.props.updateInterval);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  getDisplayedTime(time,ratio){
    
  }
  
  tick(time) {
    this.i++;
    let currentDate = this.props.onTick(time || new Date());
      
    this.setState({ value: currentDate.toString()});
    }
    
    render() {
      return (
        <div className="timeComponent">
        <h3>
        {this.state.value}   {this.i}       
        </h3> 
        <small>{this.state.name}</small>
        </div>
      );
    }
  }
  
  export default App;
  
  
  