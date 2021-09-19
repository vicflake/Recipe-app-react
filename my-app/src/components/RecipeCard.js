import React from 'react';
import './RecipeCard.css';


function RecipeCard({meal, category, image}) {
    return (
        <div className="RecipeCard">

            <img src={image} alt="Arrabiata" />
        <div className="Recipe_text">
            <h2>{meal}</h2>
            <h3>{category}</h3>
        </div>
    </div>)
}

export default RecipeCard;
