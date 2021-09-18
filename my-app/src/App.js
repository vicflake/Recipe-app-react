import React from "react";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Recipes from "./components/Recipes";
import IngredientSuggestion from "./components/IngredientSuggestion";
import Menu from "./components/Menu";


import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="Search-container">
        <Logo />
        <Search />
        <Menu />
      </div>
        
        <Recipes />
    </div>
  );
}

