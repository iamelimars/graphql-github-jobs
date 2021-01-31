import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Job from "./containers/Job";
import Jobs from "./containers/Jobs";
import GqlProvider from "./graphql/Provider";

const App = () => {
  return (
    <GqlProvider>
      <Router>
        <Switch>
          <Route path="/job/:id">
            <Job />
          </Route>
          <Route path="/">
            <Jobs />
          </Route>
        </Switch>
      </Router>
    </GqlProvider>
  );
};

export default App;
