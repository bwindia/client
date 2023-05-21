/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require("path");
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, "../src/"),
    };

    return config;
  },
};
export default config;
