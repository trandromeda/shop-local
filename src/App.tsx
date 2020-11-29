import React, { useEffect, useState } from "react";

import Shop from "./shops/Shops";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>
        <p>Shop Local!</p>
      </h1>
      <Shop />
    </div>
  );
}

export default App;
