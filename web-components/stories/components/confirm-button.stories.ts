import { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import '../../src/confirm-button.js';

const meta: Meta = {
  decorators: [(story) => html`<div style="margin: 1em">${story()}</div>`],
};
export default meta;

type Story = StoryObj<typeof meta>;

function clickForm(e: Event) {
  const form = e.currentTarget as HTMLFormElement;
  e.preventDefault();
  alert(`Form submitted!`);
}

export const FormSubmission: Story = {
  render: () => html`
    <w-confirm-button>Click Me</w-confirm-button>
  `,
  decorators: [
    (story, context) => {
      return html`<form @click="${clickForm}" method="POST">${story()}</form>`
    }
  ]
};

function clickButton(e: Event) {
  e.preventDefault();
  alert(`Button clicked!`);
}

export const StandaloneButton: Story = {
  render: () => html`
    <w-confirm-button @click="${clickButton}">Delete Item</w-confirm-button>
  `,
};
