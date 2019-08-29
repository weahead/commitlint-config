#!/usr/bin/env node

const noautocz = (process.argv[2] === 'true')
const gitParams = process.env.HUSKY_GIT_PARAMS.split(' ');

if (gitParams.length === 1) { // `git commit` only
  if (!noautocz) {
    // Run COMMITIZEN
    process.exit(0);
  }
}
process.exit(0);
