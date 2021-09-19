import React, {useState} from 'react';
import RecipeCard from "./RecipeCard";
import './Recipes.css';

import axios from 'axios';

function Recipes(props) {
let [ingredient, setIngredient] = useState(props.default);
let [recipe, setRecipe] = useState({loaded:false});

function getRecipes(response){
    setRecipe({
        loaded: true,
        mealName: response.data.meals[0].strMeal,
        category: response.data.meals[0].strCategory,
        image: response.data.meals[0].strMealThumb
    });
    console.log(response);
}

function handleSubmit(e){
    e.preventDefault();
    search();
}

function inputIngredient(e){
    setIngredient(e.target.value);
}

function search(){
    let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`;
    axios.get(apiUrl).then(getRecipes);
}

if (recipe.loaded){
    return (
        <div>
            <div className="Search" onSubmit={handleSubmit}>
                <form>
                    <input type="search" placeholder="Type an ingredient..." onChange={inputIngredient}></input>
                </form>
            </div>
            <div className="Recipes">
                <RecipeCard meal={recipe.mealName} category={recipe.category} image={recipe.image}/>
            </div>
        </div>
    )
}else {
    search();

    return "Loading";
}

   
}

export default Recipes;
