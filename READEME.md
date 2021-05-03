# 前端标准化

## prettier

```sh
# yarn prettier --write .
# prettier --check .
```

```js
// 编辑器不支持的时候，可以这么写，需要安装 onchange
// --ignore-unknown {{changed}} 不写 默认找 ./.prettierignore
"prettier-watch": "onchange \"**/*\" -- prettier --write --ignore-unknown {{changed}}"  // If your editor does not support Prettier
```

### Integrating with Linters

<!-- https://prettier.io/docs/en/integrating-with-linters.html -->

prettier 风格格式化，只做了风格校验。
linter 不仅做了代码质量检查，避免潜在 bug，还做了风格校验。
但是 linter 也做了不少风格方面的校验，这和 prettier 产生了冲突，下面推荐的三个，就是为了解决冲突的。
推荐：

<!--
eslint-config-prettier
tslint-config-prettier
stylelint-config-prettier
 -->

不推荐：

<!--
eslint-plugin-prettier
tslint-plugin-prettier
stylelint-prettier
 -->

运行 linters ，顺便运行了 prettier
优点：运行 linters ，内部集成了 prettier ，你不用额外搞基础建设（只需要你的编辑器集成了 linters 即可拥有 prettier 的特性！），然后就可以运行 `prettier --check . `，而且大多数编辑器都有了 prettier 的支持。
缺点：1，你将面临红线，很恼人，prettier 理念是让你忘记 formating 这件事，而不是让你面对它。2，比直接运行 prettier 慢。3，它们仍然是一层间接的东西可能打破。

<!--
prettier-eslint
prettier-tslint
prettier-stylelint
 -->

运行了 prettier，顺便运行了 linters
优点：可能有些 prettier 的结果不是你想要的结果，那么 eslint --fix 这样的操作可能对你来说就是有用的。
缺点：运行不如直接运行 prettier 快。

### prettier 与 editorconfig 的关系

prettier 会将 editorconfig 中兼容的属性转换到 prettier config 文件中去

### Pre-commit Hook

#### lint-stage

#### pretty-quick

#### pre-commit

#### git-format-staged

#### shell script

### git hooks

## EditorConfig

参考 .editorconfig 文件中的说明

## eslint

## stylint

## commitlint

## changelog

## CI/CD

## webpack

## babel

## vscode
