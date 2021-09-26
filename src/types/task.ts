export type TaskStates = "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";
export interface Task {
  id: string | number;
  title: string;
  state: TaskStates;
  updatedAt?: Date;
}
