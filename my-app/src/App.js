import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Card from "./components/Card/card";
import Badminton from "./components/Badminton/badminton";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/badminton">
            <Badminton />
          </Route>
          <Route path="/">
            <Card />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
