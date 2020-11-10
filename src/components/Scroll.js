import React from 'react'

const Scroll = (props) => {

    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '600px'}} >
            {props.children}
        </div>
    ) 

}

// class Scroll extends React.Component {
//     render(props){
//         return props.children
//     }



export default Scroll