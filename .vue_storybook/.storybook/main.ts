import type { StorybookConfig } from "@storybook/vue3-vite";
import fs from 'fs'

function getStories({ dir = 'ui' }) {
 const dirName = `packages/${dir}`
 const scope = fs.readdirSync(dirName)

 return scope
  .map((pkg) => `${dirName}/${pkg}/stories`)
  .filter((storyDir) => fs.existsSync(storyDir))
  .map((storyDir) => `../../${storyDir}/*.stories.@(js|jsx|ts|tsx)`)
}

const config: StorybookConfig = {
  stories: ["../../packages/ui/vue-ui/stories/*.stories.@(js|jsx|ts|tsx)",],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
