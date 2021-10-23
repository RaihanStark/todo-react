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
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length,
            title: actions.payload,
            isChecked: false,
          },
        ],
      };

    case TOGGLE_TASK:
      let toggled = state.tasks.map((task) => {
        if (task.id === actions.payload) {
          task.isChecked = !task.isChecked;
          return task;
        }

        return task;
      });
      return { ...state, tasks: toggled };

    case DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => {
            return task.id !== actions.payload;
          }),
        ],
      };
    default:
      return state;
  }
};

export default taskReducer;
