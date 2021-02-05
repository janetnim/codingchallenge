import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Task from './Task.jsx';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/tasks/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ tasks: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { tasks } = this.state;
    const taskList = <div className="tasks">
      {tasks && tasks.map(task => <Task key={task.id} task={task} history={this.props.history} />)}
    </div>

    return (
      <div className="tasks-container">
        <div className="tasks-header">
          <span className="title">Tasks</span>
          <Link to="/task/new">
            <button className="add-tasks-button">+</button>
          </Link>
        </div>
        {taskList}
      </div>
    );
  }
}

export default TaskList;
