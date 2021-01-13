import {
	FETCH_TASKS,
	FETCH_TASKS_SUCCESS,
	FETCH_TASKS_FAIL,
	CREATE_TASK,
	CREATE_TASK_SUCCESS,
	CREATE_TASK_FAIL,
	UPDATE_TASK,
	UPDATE_TASK_SUCCESS,
	UPDATE_TASK_FAIL,
} from '../actions/types';

const initialTasksState = {
	items: [],
	error: {},
	isFetching: false,
	success: false,
};

export const getTasks = (state = initialTasksState, action) => {
  switch(action.type) {
    case FETCH_TASKS:
      return { ...state, isFetching: true, success: false};
    case FETCH_TASKS_SUCCESS:
      return { ...state, isFetching: false, success: true, items: action.payload };
    case FETCH_TASKS_FAIL:
      return { ...state, error: action.payload, isFetching: false, success: false };
    default:
      return state;
  }
}

const initialTaskState = {
	items: {},
	error: {},
	isFetching: false,
	success: false,
};

export const createTask = (state = initialTaskState, action) => {
  switch(action.type) {
    case CREATE_TASK:
      return { ...state, isFetching: true, success: false};
    case CREATE_TASK_SUCCESS:
      return { ...state, isFetching: false, success: true, items: action.payload };
    case CREATE_TASK_FAIL:
      return { ...state, error: action.payload, isFetching: false, success: false };
    default:
      return state;
  }
}

export const updateTask = (state = initialTaskState, action) => {
  switch(action.type) {
    case UPDATE_TASK:
      return { ...state, isFetching: true, success: false};
    case UPDATE_TASK_SUCCESS:
      return { ...state, isFetching: false, success: true, items: action.payload };
    case UPDATE_TASK_FAIL:
      return { ...state, error: action.payload, isFetching: false, success: false };
    default:
      return state;
  }
}
