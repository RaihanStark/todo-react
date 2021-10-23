import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./taskTypes";

export const addTask = (title) => {
  return {
    type: ADD_TASK,
    payload: title,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};
