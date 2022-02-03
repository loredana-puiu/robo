import React, { Component } from "react";
import CardList from "../components/CardList"; //it can be export just once because it use export default
import SearchBox from "../components/SearchBox";
//import { robots } from "../components/robots"; //because robots use export and not export default
//it can have multiple exports and we have to destructure
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';



class App  extends Component {
    constructor()  {
        super();
        /* this state it is what it changes in a app, what describes the app */
        /* react use state to render and pass them down as props to these components*/
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    /* update the state wht this function*/
    /* we take the robots from an API, API request */
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots : users}));
        
    }

    oneSearchChange =(event)  => {
        this.setState({searchfield: event.target.value}) /* anytime i want to change state i always do this */
    }
    

    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length? 
             <h1>Loading</h1> :
      
        <div className="tc">
            <h1 className="f1"> Robo Friends</h1>
            <SearchBox searchChange={this.oneSearchChange}/> 
            <Scroll>
                <ErrorBoundry>
                     <CardList robots= {filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
        
        }
    }



export default App;