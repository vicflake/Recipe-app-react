import React, {useState} from 'react';
import './Search.css';

function Search() {


    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Type an ingredient..." onChange={inputIngredient} input={ingredient}></input>
            </form>
        </div>
    )
}
export default Search;
