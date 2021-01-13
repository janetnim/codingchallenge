import React, { Component } from 'react';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      avatar: ""
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    this.props.createNewTask(this.state);
  }

  render() {
    return (
      <div>
        <div className="tasks-header">
          <span className="title">Add Task</span>
        </div>
        <form className="task-form">
          <label>
            Task Description
            <textarea name="description" value={this.state.description} onChange={this.handleInputChange} />
          </label>
          <label className="avatar-label">
            Avatar URL
            <input className="avatar-input" name="avatar" type="file" value={this.state.avatar} onChange={this.handleInputChange} />
          </label>
          <input className="submit" type="submit" value="Add" onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
