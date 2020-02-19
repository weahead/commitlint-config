const fs = require('fs');
const path = require('path');

const commitlintrcPath = path.join(process.env.INIT_CWD, '.commitlintrc.js');

if (!fs.existsSync(commitlintrcPath)) {
  fs.writeFileSync(
    commitlintrcPath,
    "module.exports = require('@weahead/commitlint-config');"
  );
}
