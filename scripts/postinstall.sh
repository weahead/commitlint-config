#!/bin/sh

if [ ! -f "${INIT_CWD}/.commitlintrc.js" ]; then
  echo "module.exports = require('@weahead/commitlint-config');" > "${INIT_CWD}/.commitlintrc.js"
fi
