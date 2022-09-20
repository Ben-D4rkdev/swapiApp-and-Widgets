import React from "react";

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date() }),
      1000
    );
  }

  componentDidUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
