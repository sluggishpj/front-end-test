# e2e test & unit test

<p align="center">
  <a href="https://travis-ci.org/sluggishpj/front-end-test"><img src="https://travis-ci.org/sluggishpj/front-end-test.svg?branch=master" alt="Build Status"></a>
  <a href='https://coveralls.io/github/sluggishpj/nightwatch-test?branch=master'><img src='https://coveralls.io/repos/github/sluggishpj/nightwatch-test/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

## Try
* 克隆本仓库，本地尝试运行

```bash
# 安装依赖
npm install

# 运行e2e测试
npm run e2e

# 运行unit测试
npm run unit
```

## e2e test
> 本仓库使用`nightwatch`进行e2e测试，内容参照test/e2e文件夹

* 前提：JDK ( version >= 7)

* 安装测试需要的依赖

```bash
npm i -D nightwatch selenium-server chromedriver
```

* 安装运行测试需要的依赖，如开启服务器，执行命令

```bash
npm i -D cross-spawn http-server
```

* 编写配置文件，参照`e2e/nightwatch.config.js`

* 编写测试脚本，参照`e2e/spec/basic.js`

* 编写运行脚本，参照`e2e/runner.js`

* 在`package.json`中新增测试快捷方式

```json
// ...
"scripts": {
    "e2e": "node test/e2e/runner.js"
}
// ...
```

* 开始测试`npm run e2e`


## unit test
> 内容参照`test/unit`

* 安装测试需要的依赖

```bash
npm i -D karma mocha chai karma-chai karma-chrome-launcher karma-coverage-istanbul-reporter karma-mocha karma-sourcemap-loader
```
> * karma: 测试集成框架
> * mocha: 测试框架
> * chai: 断言库
> * karma-chrome-launcher: Chrome环境
> * karma-coverage-istanbul-reporter: 测试覆盖率报告


* 安装运行测试需要的依赖

```bash
npm i -D webpack babel-core babel-loader babel-plugin-istanbul babel-preset-env istanbul-instrumenter-loader karma-webpack
```
> * webpack + babel: 用于把js转译为es5
> * babel-plugin-istanbul: A Babel plugin that instruments your code with Istanbul coverage
> * istanbul-instrumenter-loader: 避免受转译后的polyfill影响其覆盖率


## 开源的持续集成和代码覆盖率

* Travis: https://travis-ci.org/
* Coveralls: https://coveralls.io/

参照根目录下：`.travis.yml`文件


## 参考链接
> e2e
> * 官网：http://nightwatchjs.org/
> * https://github.com/dwyl/learn-nightwatch
> * https://github.com/cythilya/nightwatch101
> * https://www.zhihu.com/question/51764943
>
> unit
>
> * https://github.com/tmallfe/tmallfe.github.io/issues/37
> * https://juejin.im/post/59807358518825563e037e3c
> * https://www.jianshu.com/p/9ab441d6a1f4
>
> travis-ci
>
> * http://sm4.github.io/2017/02/07/Vue-Nightwatch-e2e-tests-on-Travis-CI-in-Chrome/
