import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div>
    <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
    <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
