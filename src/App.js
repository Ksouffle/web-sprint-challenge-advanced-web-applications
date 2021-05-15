import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import { PrivateRoute } from "./helpers/PrivateRoute";
import ColorList from "./components/ColorList";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">
            logout
          </a>
        </header>
        <PrivateRoute path="/colors" component={ColorList} />

        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
