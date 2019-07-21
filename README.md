# koa-helloworld

Demo of koa.

[![license](https://img.shields.io/badge/license-MIT-FF2281.svg?style=flat-square&labelColor=black)](./LICENSE)
[![test](https://img.shields.io/badge/test-jest-001437.svg?style=flat-square&labelColor=black)]()
[![code_style:airbnb](https://img.shields.io/badge/code_style-airbnb-F5D300.svg?style=flat-square&labelColor=black)](https://github.com/airbnb/javascript)
[![code_style:prettier](https://img.shields.io/badge/code_style-prettier-FFACFC.svg?style=flat-square&labelColor=black)](https://prettier.io/)
[![pr_welcome](https://img.shields.io/badge/PRs-welcome-08F7FE.svg?style=flat-square&labelColor=black)]()

[![.nvmrc](https://img.shields.io/badge/.nvmrc-12-09FF33.svg?style=flat-square&labelColor=black)]()
[![yarn:required](https://img.shields.io/badge/yarn-required-00207F.svg?style=flat-square&labelColor=black)](https://yarnpkg.com/en/)

## Note

Please read [NOTE.md](NOTE.md), before getting started.

## Getting started

```bash
yarn install
```

## Yarn scripts

```bash
yarn start # start server with nodemon

yarn test # run all tests (run jest for all "*.test.js")
yarn test:unit # run unit test
yarn test:integration # run integration test

yarn lint # lint and format with eslint and prettier
```

### start

`yarn start` should be used both for local development and production. This is intentional. As it uses **nodemon** (a module like **pm2**, **forever**, etc), change of source code will be reflected automatically without restarting the server.

## License

[MIT License](license). Copyright &copy; 2019, Gil B. Chan <<bnbcmindnpass@gmail.com>> (@jjangga0214)
