import React, { Component }from "react";
import CardList from "./CardList"; //it can be export just once because it use export default
import SearchBox from "./SearchBox";
import { robots } from "./robots"; //because robots use export and not export default
//it can have multiple exports and we have to destructure
import './App.css';



class App  extends Component {
    constructor()  {
        super();
        /* this state it is what it changes in a app, what describes the app */
        /* react use state to render and pass them down as props to these components*/
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    oneSearchChange =(event)  => {
        this.setState({searchfield: event.target.value}) /* anytime i want to change state i always do this */
    }
    

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
        <div className="tc">
            <h1 className="f1"> Robo Friends</h1>
            <SearchBox searchChange={this.oneSearchChange}/> 
            <CardList robots= {filteredRobots}/>
        </div>
        )
   
    }

}

export default App;