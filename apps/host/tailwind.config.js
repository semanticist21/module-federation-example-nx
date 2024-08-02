const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const sharedConfig = require('../../tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(__dirname, '../../node_modules/rizzui/dist/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [sharedConfig],
};
