import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { ShopStoreProvider } from "./shop-store";

import "./App.scss";
import Search from "./search/Search";
import Shops from "./shops/Shops";
import Footer from "./footer/Footer";

library.add(fas);

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
        <Footer />
      </div>
    </ShopStoreProvider>
  );
}

export default App;
