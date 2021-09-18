import React, {useState} from 'react';
import './Search.css';

function Search() {
let [ingredient, setIngredient] = useState("");

function handleSubmit(e){
    e.preventDefault();

    console.log(ingredient);
}

function inputIngredient(e){
    setIngredient(e.target.value);
}


    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Type an ingredient..." onChange={inputIngredient}></input>
            </form>
        </div>
    )
}
export default Search;
