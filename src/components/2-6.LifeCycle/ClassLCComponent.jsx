import React, { Component } from "react";

export default class ClassLCComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor")
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.timerID = setInterval(() => {
        this.tick()
    }, 10000)
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date()})
  }

  handleClick() {
    alert(this.state.date)
  }

  handleh2Click = () => {
    alert(this.state.date)
  }

  render() {
    console.log("render")
    return <div>
      <h1 onClick={this.handleClick}>Hello, LifeCycle!</h1>
      <h2 onClick={this.handleh2Click}>{this.state.date.toLocaleTimeString()}</h2>

    </div>;
  }
}