// @ts-nocheck
import type { Story, Meta } from "@storybook/react";
import { Provider } from "react-redux";

import { InboxScreen, InboxScreenProps } from "./InboxScreen";

import { action } from "@storybook/addon-actions";
import * as TaskListStories from "./TaskList.stories";

const store = {
  getState: () => ({ tasks: TaskListStories.Default.args?.tasks || [] }),
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta<InboxScreenProps>;

const Template: Story<InboxScreenProps> = (args) => <InboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
