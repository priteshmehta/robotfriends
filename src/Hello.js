import React from  'react'
import './hello.css'
class Hello extends React.Component {
    render() {
        return (
            <div className = "f1 tc">
                <h1>Hello! React!</h1>
                <p>{this.props.greeting}</p>
                <p>{this.props.message}</p>
            </div>
        )
        
    }
} 
export default Hello;