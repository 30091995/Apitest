import React from 'react'

function SearchBeer (props)
{
    let searchHandler = (event) =>
    {
        let currentInputValue = event.target.value
        props.onSearchCallBack(event)

    }
    
        return (
            <div>
                <input type="text" value={props.currentSearchTerm} onChange={searchHandler} />
            </div>
        )
}

export default SearchBeer