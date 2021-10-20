import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./taskTypes";

const initialState = {
  tasks: [
    {
      id: 0,
      title: "Jump for one minutes",
      isChecked: false,
    },
    {
      id: 1,
      title: "Jump for two minutes",
      isChecked: false,
    },
    {
      id: 2,
      title: "Jump for three minutes",
      isChecked: false,
    },
  ],
};

const taskReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TASK:
      console.log(actions.type, actions.payload);
      return state;

    case TOGGLE_TASK:
      let tasks = state.tasks;
      tasks[actions.payload].isChecked = !tasks[actions.payload].isChecked;
      return { ...state, tasks: [...tasks] };

    case DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => {
            return task.id != actions.payload;
          }),
        ],
      };
    default:
      return state;
  }
};

export default taskReducer;
