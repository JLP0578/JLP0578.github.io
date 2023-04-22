import { Loader } from '../views/Loader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

