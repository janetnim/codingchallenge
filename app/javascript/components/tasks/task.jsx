import React, { Component } from 'react';
import TaskForm from './task_form.jsx';
import Avatar from '../../assets/images/default_avatar.png';
import moment from 'moment';

const Task = ({task, updateTask}) => {
  const handleInputChange = (task) => {
    updateTask(task.id);
  }

  const showCheckbox = () => {
    if(task && !task.completed) {
      return (
        <form className="completed">
          <input
            name="completed"
            type="checkbox"
            onClick={() => handleInputChange(task)}
          />
        </form>
      );
    } else {
      return (
        <span className="completed-at">{task && moment(task.completed_at).format("HH.mm A")}</span>
      );
    }
  }

  return (
    <div className="task">
      <img className="avatar" src={Avatar} />
      <span className="description">{task && task.description}</span>
      {showCheckbox()}
    </div>
  );
}

export default Task;
