import React, {useState} from 'react';
import RecipeCard from "./RecipeCard";
import './Recipes.css';

function Recipes() {
let [ingredient, setIngredient] = useState("");

function handleSubmit(e){
    e.preventDefault();
    console.log(ingredient)
}

function inputIngredient(e){
    setIngredient(e.target.value);
}



    return (
        <div>
            <div className="Search" onSubmit={handleSubmit}>
                <form>
                    <input type="search" placeholder="Type an ingredient..." onChange={inputIngredient}></input>
                </form>
            </div>
            <div className="Recipes">
                <RecipeCard default="Arrabiata"/>
            </div>
        </div>
    )
}

export default Recipes;
