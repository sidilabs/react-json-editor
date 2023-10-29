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
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
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
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
    // Merge custom configuration into the default config
    return result;
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
