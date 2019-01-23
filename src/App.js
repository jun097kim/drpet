import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppTemplate from "components/base/AppTemplate";
import { Home, Pet, Vet } from "pages";

class App extends Component {
  render() {
    return (
      <AppTemplate>
        <Route path="/" component={Home} exact />
        <Route path="/pet" component={Pet} />
        <Route path="/vet" component={Vet} />
      </AppTemplate>
    );
  }
}

export default App;
