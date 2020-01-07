# @weahead/commitlint-config

[We aheads](https://www.weahead.se/) commitlint config.

## Install
This config and it's dependencies are included in We aheads tooling packages and don't need to be installed in new We ahead projects. Instead use one of the tooling packages that have all configs and dependencies needed for it's use.

- For **non-React** projects use [@weahead/tooling](https://github.com/weahead/tooling)
- For **React** projects use [@weahead/tooling-react](https://github.com/weahead/tooling-react)

### Install the config by it's own

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
