import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the darkMode state
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Determine the className based on darkMode state
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

