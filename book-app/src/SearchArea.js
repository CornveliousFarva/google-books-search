import React from 'react';
import App from './App'

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form action="">
                <input onChange={props.handleSearch} type="text"></input>
                <button type="submit">Search</button>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option value="Sort"></option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea