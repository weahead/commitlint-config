# @weahead/commitlint-config

[We aheads](https://www.weahead.se/) commitlint config.

## Install

`npx install-peerdeps -d -x '-E' @weahead/commitlint-config`

### Usage

A `.commitlintrc.js` file will automatically be created in the root of your project with:

```js
module.exports = require("@weahead/commitlint-config");
```

#### Turn off Commitizen

Use this config if you don't want help from [Commitizen](http://commitizen.github.io/cz-cli/) to create commit messages:

`git config --global wa.noautocz true`

**_Note!_** This does not turn off the linting of your commit messages, it only turns off the help from `Commitizen` when creating the commit message.

## License

[X11](LICENSE)
