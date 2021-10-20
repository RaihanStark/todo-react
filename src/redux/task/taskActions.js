import { ADD_TASK, TOGGLE_TASK } from "./taskTypes";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
};
