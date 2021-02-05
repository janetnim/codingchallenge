import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";
import NotFound from "../components/NotFound";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={TaskList} />
      <Route path="/task/new" exact component={NewTask} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
