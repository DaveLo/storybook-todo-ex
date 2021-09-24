import { Story, Meta } from "@storybook/react";
import type { Task as ITask } from "../types/task";
import { Task, TaskProps } from "./Task";

export default {
  component: Task,
  title: "Task",
} as Meta<TaskProps>;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  } as ITask,
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  } as ITask,
};
