import { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  component: 'div',
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'success', 'info', 'warning', 'danger'],
      defaultValue: 'default',
      description: 'Sets the Bootstrap panel type.',
    },
  },
  render: ({ title, content, type }) => html`
    <div class="panel panel-${type}">
      <div class="panel-heading">${title}</div>
      <div class="panel-body">${content}</div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultPanel: Story = {
  args: {
    title: 'Panel Title',
    content: 'This is the panel content.',
    type: 'default',
  },
};

export const SuccessPanel: Story = {
  args: {
    title: 'Panel Title',
    content: 'This is a success panel.',
    type: 'success',
  },
};

export const WarningPanel: Story = {
  args: {
    title: "Panel Title",
    content: "This is a warning panel.",
    type: "warning"
  }
};
