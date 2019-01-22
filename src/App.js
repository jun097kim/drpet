import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppTemplate from "components/base/AppTemplate";
import { Landing } from "pages";

class App extends Component {
  render() {
    return (
      <AppTemplate>
        <Route path="/" component={Landing} exact />
      </AppTemplate>
    );
  }
}

export default App;
