// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import { chalkProcessing } from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  host: 'localhost',
  startPath: '/',
  open: 'external',
  port: 3009,
  ui: {
    port: 4001
  },
  server: {
    baseDir: 'dist'
  },
  files: [
    'src/*.html'
  ]
});
