import { Component } from "react";
import './CardList.style.css'
class CardList extends Component {
    render(){
        const {monsters} = this.props;
        return(
            <div className="card-list">   
                {monsters.map(monster => (
                    <div className="card-container" key={monster.id}>
                    <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`}/>
                    <h2>{monster.name}</h2>
                    <h4>{monster.email}</h4>
                    </div>
        ))} 
            </div>
        )
    }
}

export default CardList;