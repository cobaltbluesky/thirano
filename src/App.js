import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Start from "./pages/Start";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/view/" component={View} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
