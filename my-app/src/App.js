import React from "react";
import Search from "./components/Search";
import Logo from "./components/Logo";
import RecipeCard from "./components/RecipeCard";
import IngredientSuggestion from "./components/IngredientSuggestion";

import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="Search-box">
        <Logo />
        <Search />
        <IngredientSuggestion />
      </div>
        

        <RecipeCard />
    </div>
  );
}

