import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { ShopStoreProvider } from "./shop-store";

import "./App.scss";
import {
  Search,
  Shops,
  Footer,
  About,
  Navbar,
  Contribute,
  Contact,
} from "./components";

library.add(fas);

function App() {
  return (
    <Router>
      <ShopStoreProvider>
        <div className="App">
          <Navbar />

          <div className="view">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contribute">
                <Contribute />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Shops />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </ShopStoreProvider>
    </Router>
  );
}

export default App;
