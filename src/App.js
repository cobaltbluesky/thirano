import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Start from "./pages/Start";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={View} />
    </BrowserRouter>
  );
}

export default App;
