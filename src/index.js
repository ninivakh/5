import React from "react";
import ReactDOM from "react-dom/client";
import Apl from "./Apl";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
    };
  }

  handleButtonClick = () => {
    var newName = 'JohnDoe';
    this.setState({ name: newName });
    window.alert(`Name: ${newName}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click</button>
      </div>
    );
  }
}

export default App;


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);