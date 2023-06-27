import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
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
  onChangeEvent = (event) => {
    const search = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { search };
    });
  }
  render() {
    const {monsters , search} = this.state;
    const {onChangeEvent} = this;
    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(search);
    });
    return (
      <div className="App">
      <h1>List of monster</h1>
        <input
          type="search"
          placeholder="search"
          onChange={onChangeEvent}
        />
        {filterMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h4>{monster.name}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
