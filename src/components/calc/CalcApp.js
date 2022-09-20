import { Component } from "react";
import { evaluate } from "mathjs";

import Button from "./Button";
import Input from "./input";
import "./styles.css";
export default class CalcApp extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };

    this.operator = [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "+"],
      ["^", "0", ".", "-"]
    ];

    this.handleChange = this.handleChange.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear() {
    this.setState({
      input: ""
    });
  }

  handleChange(val) {
    this.setState((state) => ({
      input: state.input + val
    }));
  }

  handleEqual() {
    this.setState((state) => ({
      input: evaluate(state.input)
    }));
  }
  // return JSX code below with the render buttons function
  renderButtons() {
    return this.operator.map((row, idx) => {
      return (
        <div key={idx} className="row">
          {row.map((char) => {
            return (
              <Button key={char} handleChange={this.handleChange}>
                {char}
              </Button>
            );
          })}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <Input input={this.state.input} />

        {this.renderButtons()}

        <div className="row">
          <Button label="clear-button" handleChange={this.handleClear}>
            Clear
          </Button>

          <Button label="equal-btn" handleChange={this.handleEqual}>
            =
          </Button>
        </div>
      </div>
    );
  }
}
