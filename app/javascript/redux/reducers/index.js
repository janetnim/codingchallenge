import { combineReducers } from 'redux';
import { getTasks, createTask, updateTask } from './tasks.js';

export default combineReducers({
  getTasks,
  createTask,
  updateTask,
});
