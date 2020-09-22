import React from "react";
import Waiter from "./components/Waiter";
import Home from "./components/Home";
import Kitchen from "./components/Kitchen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ticket from "./components/Ticket";
import MenuProvider from "./context/MenuProvider";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/boleta">
          <Ticket />
        </Route>
        <Route path="/mesero">
          <MenuProvider>
            <Waiter />
          </MenuProvider>
        </Route>
        <Route path="/cocina">
          <Kitchen />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
