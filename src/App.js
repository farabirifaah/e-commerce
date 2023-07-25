import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage, ResumePage } from "pages";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/resume" component={ResumePage}></Route>
      </Router>
    </>
  );
}

export default App;
