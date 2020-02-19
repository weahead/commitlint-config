const fs = require('fs');

const commitlintrcPath = `${process.env.INIT_CWD}/.commitlintrc.js`;

if (!fs.existsSync(commitlintrcPath)) {
  fs.writeFileSync(
    commitlintrcPath,
    "module.exports = require('@weahead/commitlint-config');"
  );
}
