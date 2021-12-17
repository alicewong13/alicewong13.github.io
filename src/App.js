import React, { Component } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Project1 from "./pages/Project1";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project1">About</Link>
            </li>
          </ul>

          <hr />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/project1" element={<Project1 />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
