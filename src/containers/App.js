import React from 'react'
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../SearchBox'
import Scroll from '../components/Scroll'
import Clock from './Clock'
import ErrorBoundry from '../components/ErrorBoundry'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  console.log("constructor")
  }  
  componentWillUnmount() {
    console.log("ComponentWillUnmount")
  }
  componentDidMount(){
    console.log("ComponentDidMount")
    fetch("https://jsonplaceholder.typicode.com/users").then( (response) => {
        response.json().then((data) => {
            console.log("This should load before fetch!!!")
            this.setState({robots: data})
        })
    })    
  }
  onChangeEvent = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render() {
    console.log("Render")
    const filterRobots = this.state.robots.filter( (robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield)
    })
    if(this.state.robots.length === 0) {
      return (<h1>Loading....</h1>)    
    } else {
      return(
        
        <div className="tc">
          <h1>RoboFriends</h1>
          <ErrorBoundry>
            <Clock />
          </ErrorBoundry>
          <SearchBox searchChange={this.onChangeEvent}/>
          <Scroll>
            <CardList robots={filterRobots}/>
          </Scroll>
        </div>
      )
    }
  }
}

export default App;
