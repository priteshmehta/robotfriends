import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        if(false) {
            throw new Error("Error in Clock Compnent")
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    
    componentDidMount() {
        this.intervalID = setInterval( () => this.setState({date: new Date()}), 1000)
    }
    
    render() {
        return(
            <div>
                <p>Time: {this.state.date.toLocaleTimeString()}</p>
                {/* <p>Date: {this.state.date.toLocaleDateString()}</p> */}
            </div>
        )
    }
}

export default Clock