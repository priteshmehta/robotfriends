import React from 'react'

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { 
            hasError: false,
            info: null
         }
        
    }
    componentDidCatch(error, info) {
        this.setState({hasError:true, info: info})
    }
    render() {
        if (this.state.hasError) {
        return ( <h3>"Component got the error. Info:" {this.state.info}</h3>)
        }
        return (<h1>{this.props.children}</h1>)
    }
}
export default ErrorBoundry