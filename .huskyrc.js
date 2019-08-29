module.exports = {
  hooks: {
    'pre-commit': 'lint-staged && sleep 6',
    'prepare-commit-msg': 'if [ "$(cat .git/COMMIT_EDITMSG | sed -e \'s/#.*//g\' | tr -d \'\n\')" = "" ]; then ( [ "$(git config --get wa.noautocz)" = "true" ] || (exec < /dev/tty && git cz --hook)); else (commitlint -e || (exec < /dev/tty && git cz --hook)); fi;',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'post-merge': 'package-change-checker',
    'post-rewrite': 'package-change-checker $HUSKY_GIT_STDIN',
    'post-checkout':
      '(test -d "$(git rev-parse --git-path rebase-merge)" || test -d "$(git rev-parse --git-path rebase-apply)" ) || package-change-checker $HUSKY_GIT_PARAMS',
  },
};
