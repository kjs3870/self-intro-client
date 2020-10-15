import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import Write from "./routes/Write";
import Update from "./routes/Update";
import Search from "./routes/Search";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/write" exact={true} component={Write} />
        <Route path="/intro/:id" component={Detail} />
        <Route path="/update/:id" component={Update} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;