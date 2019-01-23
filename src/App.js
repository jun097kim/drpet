import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppTemplate from "components/base/AppTemplate";
import { Landing, Pet } from "pages";

class App extends Component {
  render() {
    return (
      <AppTemplate>
        <Route path="/" component={Landing} exact />
        <Route path="/pet" component={Pet} />
      </AppTemplate>
    );
  }
}

export default App;
