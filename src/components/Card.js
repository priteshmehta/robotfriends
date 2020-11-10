import React from 'react'
const Card = ((props) => {
const {id, name, email } = props
return(
    <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <h1> RoboFirends</h1>
        <img alt="Robot image" src={`https://robohash.org/${id}?size=200x200`}></img>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)
})
export default Card