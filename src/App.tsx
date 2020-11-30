import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { ShopStoreProvider } from "./shop-store";

import "./App.scss";
import Search from "./search/Search";
import Shops from "./shops/Shops";
import Footer from "./footer/Footer";
import About from "./about/About";
import Navbar from "./navbar/Navbar";

library.add(fas);

function App() {
  return (
    <Router>
      <ShopStoreProvider>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Search />
              <Shops />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ShopStoreProvider>
    </Router>
  );
}

export default App;
