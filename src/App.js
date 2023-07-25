import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage, CategoryPage, ProductPage } from "pages";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/category" component={CategoryPage}></Route>
        <Route exact path="/detail-product/:id" component={ProductPage}></Route>
      </Router>
    </>
  );
}

export default App;
