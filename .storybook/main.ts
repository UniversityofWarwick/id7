import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../web-components/stories/**/*.stories.{ts,tsx}',
    '../web-components/stories/**/*.mdx',
  ],
  staticDirs: ['../dist'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  docs: {
    defaultName: 'Documentation',
    docsMode: false,
  },
  framework: '@storybook/web-components-vite',
};

export default config;
