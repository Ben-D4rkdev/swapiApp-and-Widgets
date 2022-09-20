import React from "react";

class FontSizer extends React.Component {
  constructor() {
    super();

    this.state = {
      size: 20
    };

    this.handleSize = this.handleSize.bind(this);
  }

  handleSize = (amt) => {
    this.setState({ size: this.state.size + amt });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleSize(5)}>Increment</button>
        <button onClick={() => this.handleSize(-5)}>Decrement</button>
        <p style={{ fontSize: `${this.state.size}px` }}>{this.state.size}px</p>
      </div>
    );
  }
}

export default FontSizer;
