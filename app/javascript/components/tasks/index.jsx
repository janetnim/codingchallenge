import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Task from './task.jsx';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks, updateTask, createTask } from '../../redux/actions/tasks';

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks, updateTask, createTask } = this.props;
    const taskList = <div className="tasks">
      {tasks && tasks.map(task => <Task key={task.id} task={task} updateTask={updateTask} />)}
    </div>

    return (
      <div className="tasks-container">
        <div className="tasks-header">
          <span className="title">Tasks</span>
          <Link to={{pathname: '/tasks/new', state: createTask}}>
            <button className="add-tasks-button">+</button>
          </Link>
        </div>
        {taskList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
	tasks: state.getTasks.items,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchTasks,
  updateTask,
  createTask,
}, dispatch);

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(TaskList));
