import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:9000/")
    .then(res => {
      return res.text();
    })
    .then(res => {
      let user = JSON.parse(res);
      this.setState({apiResponse: user})
    })
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      <p>Hello {this.state.apiResponse.name}</p>
      </div>
    );
  }
}

export default App;
