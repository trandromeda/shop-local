import React, { useEffect, useState } from "react";
import { ShopStoreProvider } from "./shop-store";

import "./App.scss";
import Search from "./search/Search";
import Shops from "./shops/Shops";

function App() {
  return (
    <ShopStoreProvider>
      <div className="App">
        <h1>
          <p>Shop Local Toronto!</p>
        </h1>
        <Search />
        <Shops />
      </div>
    </ShopStoreProvider>
  );
}

export default App;
