#!/usr/bin/env node

const fs = require('fs');

const commitlintrcPath = `${process.env.INIT_CWD}/.commitlintrc.js`;

fs.open(commitlintrcPath, 'wx', err => {
  if (err) {
    if (err.code === 'EEXIST') {
      // silent error, don't do anything the file already exist
      return;
    }

    throw err;
  }

  fs.writeFile(
    commitlintrcPath,
    "module.exports = require('@weahead/commitlint-config');",
    err => {
      if (err) {
        throw err;
      }
      console.log('commitlintrc.js was created');
    }
  );
});
