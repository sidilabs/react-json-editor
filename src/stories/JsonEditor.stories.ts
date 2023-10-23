import type { Meta, StoryObj } from '@storybook/react';

import { JsonEditor } from '../components/JsonEditor';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/JsonEditor',
  component: JsonEditor,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof JsonEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

let dataRef = {
  data: {
    keyStr: 'string',
    keyNum: 1,
    keyBool: true,
    keyArr: ['1', 1, true, [], {}],
    keyObj: {
      second: null,
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    width: '440px',
    data: dataRef.data,
    schema: {},

    onChange(data) {
      dataRef.data = data;
      console.log(data);
    },
  },
};
