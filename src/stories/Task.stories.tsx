import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Task from "../Task";
import {TaskType} from "../App";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TodoList/Task',
  component: Task,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    removeTask: action('remove task'),
    changeTaskStatus: action('change task status'),
    changeTitle: action('change title'),
  }
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsDoneStory.args = {
  id: '1111',
  task: {id: '1', isDone: true, title: 'JS'},
};

export const TaskIsNotDoneStory = Template.bind({});

TaskIsNotDoneStory.args = {
  id: '2',
  task: {id: '2', isDone: false, title: 'React'}
};