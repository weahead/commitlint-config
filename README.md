# @weahead/commitlint-config

[We aheads](https://www.weahead.se/) commitlint config.

## Install

`npx install-peerdeps -d -x '-E' @weahead/commitlint-config`

### Usage

1. Create a file named `.commitlintrc.js` and fill it with:

   ```js
   module.exports = require('@weahead/commitlint-config');
   ```

2. Optionally, add a run target to `scripts` in `package.json`:

   ```json
   {
     "scripts": {
       "commit": "commit"
     }
   }
   ```

3. Optionally, create a git alias to run `commit` script via `git`. You can choose almost whatever you like as the value for `<NAME>`.

```sh
git config --global alias.<NAME> '!npm run commit'
```

For example `git config --global alias.ci '!npm run commit'` would run commit script on `git ci`.

## License

[X11](LICENSE)
