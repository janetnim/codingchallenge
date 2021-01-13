import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import TaskList from './tasks/index';
import TaskForm from './tasks/task_form';
import Task from './tasks/task';
import NotFound from './not_found';
import Home from "./home";
import store from '../store';

const App = () => (
  <Provider store={store}>
    <Router>
    	<Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/tasks" component={TaskList} />
        <Route exact path="/tasks/new" component={TaskForm} />
        <Route exact path="/tasks/:id" component={Task} />
        <Route component={NotFound} />
    	</Switch>
    </Router>
  </Provider>
);

export default App;
