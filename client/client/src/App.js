import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => (
  <Router>
    <Route path="/" component={Join} exact />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
