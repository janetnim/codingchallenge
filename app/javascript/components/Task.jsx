import Avatar from '../assets/images/default_avatar.png';
import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  updateTask = () => {
    const { task } = this.props;
    const url = `/api/v1/show/${task.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "PATCH",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => window.location.reload(false))
      .catch(error => console.log(error.message));
  }

  render() {
    const { task } = this.props;
    return (
      <div className="task-container">
        <img className="avatar" src={Avatar} />
        <span className="description">{task.description}</span>
        {!task.completed ?
          <input
            name="completed"
            className="completed"
            type="checkbox"
            onClick={this.updateTask}
          /> :
        <span className="completed-at">{moment(task.completed_at).format("HH.mm A")}</span>}
      </div>
    );
  }
}

export default Task;
