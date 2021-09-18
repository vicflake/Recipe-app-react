import React from 'react';
import RecipeCard from "./RecipeCard";
import './Recipes.css';

function Recipes() {
    return (
        <div className="Recipes">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    )
}

export default Recipes
