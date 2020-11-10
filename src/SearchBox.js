import React from 'react'

const SearchBox = ({searchChange})=> {
    return (
        <input type="search" placeholder="search robot" onChange={searchChange}/>
    )
}

export default SearchBox