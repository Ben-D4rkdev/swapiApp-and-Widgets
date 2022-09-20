import React from "react";

class TextAlign extends React.Component {
  constructor() {
    super();

    this.state = {
      alignment: ""
    };
  }

  handleAlign = (align) => {
    this.setState({ alignment: align });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: this.state.alignment }}>Align Me Please</h1>
        <button onClick={() => this.handleAlign("left")}>Left</button>
        <button onClick={() => this.handleAlign("center")}>center</button>
        <button onClick={() => this.handleAlign("right")}>right</button>
        <p>click the Buttons on the screen back and forth</p>
      </div>
    );
  }
}

export default TextAlign;
