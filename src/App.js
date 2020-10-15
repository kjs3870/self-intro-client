import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Intro from "./routes/Intro";
import Navigation from "./components/Navigation";
import Write from "./routes/Write";
import Update from "./routes/Update";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/write" exact={true} component={Write} />
        <Route path="/intro/:id" component={Intro} />
        <Route path="/update/:id" component={Update} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;