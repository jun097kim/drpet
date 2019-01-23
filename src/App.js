import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppTemplate from "components/base/AppTemplate";
import { Home, Vet } from "pages";

class App extends Component {
  render() {
    return (
      <AppTemplate>
        <Route path="/" component={Home} exact />
        <Route path="/vet" component={Vet} exact />
      </AppTemplate>
    );
  }
}

export default App;
