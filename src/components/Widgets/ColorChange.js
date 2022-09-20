import React from "react";

class ColorChange extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "Black",
      input: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      color: this.state.input,
      input: ""
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Color here"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleSubmit}>Click here</button>
      </div>
    );
  }
}

export default ColorChange;
