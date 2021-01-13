import call from '../../utils/call_api';
import { FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAIL, CREATE_TASK, CREATE_TASK_SUCCESS,
 	CREATE_TASK_FAIL, UPDATE_TASK, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAIL } from './types';

export const get = () => ({
	type: FETCH_TASKS,
});

export const getSuccess = tasks => ({
	type: FETCH_TASKS_SUCCESS,
	payload: tasks,
});

export const getFail = error => ({
	type: FETCH_TASKS_FAIL,
	payload: error,
});

export const create = () => ({
	type: CREATE_TASK,
});

export const createSuccess = task => ({
	type: CREATE_TASK_SUCCESS,
	payload: task,
});

export const createFail = error => ({
	type: CREATE_TASK_FAIL,
	payload: error,
});

export const update = () => ({
	type: UPDATE_TASK,
});

export const updateSuccess = task => ({
	type: UPDATE_TASK_SUCCESS,
	payload: task,
});

export const updateFail = error => ({
	type: UPDATE_TASK_FAIL,
	payload: error,
});

export const fetchTasks = () => (dispatch) => {
	dispatch(get());
	call({endpoint: `/api/v1/tasks/index`, method: 'GET'})
	.then((task) => {
    dispatch(getSuccess(task))
  })
	.catch(error => dispatch(getFail(error)));
};

export const createTask = (params) => (dispatch) => {
	dispatch(create());
	call({endpoint: `/api/v1/tasks/create`, method: 'POST', body: JSON.stringify(params)})
	.then((task) => {
		dispatch(createSuccess(task));
	})
	.catch(error => dispatch(createFail(error)));
};

export const updateTask = (id) => (dispatch) => {
	dispatch(update());
	call({endpoint: `/api/v1/tasks/${id}`, method: 'PATCH'})
	.then((task) => {
		dispatch(updateSuccess(task));
	})
	.catch(error => dispatch(updateFail(error)));
};
