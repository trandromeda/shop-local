import React, { useEffect, useState } from "react";
import { ShopStoreProvider } from "./shop-store";

import "./App.scss";
import Search from "./search/Search";
import Shops from "./shops/Shops";

function App() {
  return (
    <ShopStoreProvider>
      <div className="App">
        <div className="header">
          <h1 className="title">Rouge</h1>
          <h2 className="subtitle">Shop Local Toronto</h2>
        </div>
        <Search />
        <Shops />
      </div>
    </ShopStoreProvider>
  );
}

export default App;
