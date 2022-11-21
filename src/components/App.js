import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

    const [isOn, setIsOn] = useState(false);
    
    function buttonClick() {
      setIsOn((isOn) => !isOn);
    }
  
  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={buttonClick}>{isOn? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
  }


export default App;
