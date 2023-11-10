import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";
import { useState } from "react";
const App = () => {
  console.log("render")
  const [searchField, setSearchField] = useState("");
  console.log(searchField);
  const onChangeEvent = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="Search Monsters"
        onChangeHandler={onChangeEvent}
      />
    </div>
  );
};

// export default App
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       search: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   onChangeEvent = (event) => {
//     const search = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { search };
//     });
//   }
//   render() {
//     const {monsters , search} = this.state;
//     const {onChangeEvent} = this;
//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(search);
//     });
//     return (
//       <div className="App">
//       <h1>List of monster</h1>
//         <SearchBox className="monster-search-box"placeholder='Search Monsters'onChangeHandler={onChangeEvent}/>
//         <CardList monsters={filterMonster}/>
//       </div>
//     );
//   }
// }
export default App;
