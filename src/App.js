// import "./App.css";
import "./common/header/Header.css";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";

function App() {
  // step 1 fetch data and use state pass it
  const { productItems } = Data;
  // const [cartItem, setCartItem] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} />{" "}
          </Route>{" "}
        </Switch>{" "}
        <Footer />
      </Router>{" "}
    </>
  );
}

export default App;
