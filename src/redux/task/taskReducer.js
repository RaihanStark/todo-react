import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./taskTypes";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TASK:
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
      let toggled = state.tasks;
      toggled[actions.payload].isChecked = !toggled[actions.payload].isChecked;
      return { ...state, tasks: [...toggled] };

    case DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task, index) => {
            return index !== actions.payload;
          }),
        ],
      };
    default:
      return state;
  }
};

export default taskReducer;
