import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={TaskList} />
      <Route path="/task/new" exact component={NewTask} />
    </Switch>
  </Router>
);
