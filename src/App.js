import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name : 'bhanu'
    }
  }
  render() {
  return (
    <div className="App">
      <p>hello {this.state.name}</p>
      <button onClick={() => {this.setState({name:'prakash'})}}>change name</button>
    </div>
  );
}
}
export default App;
