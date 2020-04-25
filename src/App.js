import React, { Component } from "react";
import "./App.css";
import "./style/Root.css";
import TextInput from "./Input/TextInput";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      charCount: 0,
      text: "",
    };
  }
  handleInput = (event) => {
    this.setState({
      charCount: event.target.value.length,
      text: event.target.value,
    });
  };

  handleClick = (event, idx) => {
    const text = [...this.state.text];
    text.splice(idx, 1);
    this.setState({
      charCount: text.length,
      text: text.join(""),
    });
  };
  render() {
    //get char component check box
    let chars = (
      <div>
        {this.state.text.split("").map((element, idx) => {
          return (
            <Char
              eachChar={element}
              key={idx}
              clicked={(event) => this.handleClick(event, idx)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="div_back">
        <TextInput
          changed={this.handleInput}
          charCount={this.state.charCount}
          text={this.state.text}
        />
        <Validation length={this.state.charCount} />
        {chars}
      </div>
    );
  }
}
