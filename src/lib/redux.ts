import { createStore, Reducer } from "redux";
import { TaskStates, Task } from "../types/task";

export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
} as const;

type ActionType = typeof actions[keyof typeof actions];

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id: string | number) => ({
  type: actions.ARCHIVE_TASK,
  id,
});
export const pinTask = (id: string | number) => ({
  type: actions.PIN_TASK,
  id,
});

export type TaskState = { tasks: Task[] };
export type TaskAction = { type: ActionType; id: string | number };
// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks: Task[] = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

const initialState: TaskState = { tasks: defaultTasks };

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState: TaskStates) {
  return (state: TaskState, action: TaskAction) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

// We export the constructed redux store
export default createStore(reducer, initialState);
