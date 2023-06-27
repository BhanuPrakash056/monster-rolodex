import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search" onChange={(event) => {
          const search = event.target.value.toLocaleLowerCase();
          const filterMonster = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(search);
          });
          this.setState(()=>{
            return {monsters : filterMonster}
          })
        }} />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>
                hi my name is {monster.name}and my profession is{" "}
                {monster.company.bs}{" "}
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
