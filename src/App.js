import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
