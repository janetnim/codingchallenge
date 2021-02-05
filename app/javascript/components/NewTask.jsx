import React from "react";
import { Link } from "react-router-dom";

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      avatar: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const url = "/api/v1/tasks/create";
    const { description, avatar } = this.state;

    const body = {
      description,
      avatar,
    };
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push("/"))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="new-task-container">
        <div className="tasks-header">
          <span className="title">Add Task</span>
        </div>
        <form className="task-form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="recipeName">Description</label>
            <textarea
              className="description"
              id="description"
              name="description"
              rows="5"
              required
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="avatar-label">Avatar URL
              <input
                type="file"
                className="avatar-input"
                name="avatar"
                onChange={this.onChange}
              />
              <span>{this.state.avatar}</span>
            </label>
          </div>
          <button type="submit" className="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NewTask;
