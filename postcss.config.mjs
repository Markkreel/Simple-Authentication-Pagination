// This file configures PostCSS plugins, primarily for processing Tailwind CSS.
// It enables the Tailwind CSS plugin for transforming utility classes into actual CSS.

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
