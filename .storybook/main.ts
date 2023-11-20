import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    let result = mergeConfig(config, {
      plugins: [
        viteStaticCopy({
          targets: [
            {
              src: ".storybook/.nojekyll",
              dest: "",
            },
          ],
        }),
      ],
    });
    return result;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
