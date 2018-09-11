import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    loading: false
  };
  handleClick = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      }
    );
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.handleClick}>Click me</button>
        <div>{this.props.children}</div>
        {this.state.loading ? "Loading" : ""}
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default App;
