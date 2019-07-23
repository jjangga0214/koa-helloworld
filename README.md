# koa-helloworld

Demo of koa.

[![license](https://img.shields.io/badge/license-MIT-FF2281.svg?style=flat-square&labelColor=black)](./LICENSE)
[![test](https://img.shields.io/badge/test-jest-001437.svg?style=flat-square&labelColor=black)]()
[![code_style:airbnb](https://img.shields.io/badge/code_style-airbnb-F5D300.svg?style=flat-square&labelColor=black)](https://github.com/airbnb/javascript)
[![code_style:prettier](https://img.shields.io/badge/code_style-prettier-FFACFC.svg?style=flat-square&labelColor=black)](https://prettier.io/)
[![.nvmrc](https://img.shields.io/badge/.nvmrc-12-09FF33.svg?style=flat-square&labelColor=black)]()
[![yarn:required](https://img.shields.io/badge/yarn-required-00207F.svg?style=flat-square&labelColor=black)](https://yarnpkg.com/en/)
[![pr_welcome](https://img.shields.io/badge/PRs-welcome-08F7FE.svg?style=flat-square&labelColor=black)]()

[![CircleCI](https://circleci.com/gh/jjangga0214/koa-helloworld.svg?style=svg)](https://circleci.com/gh/jjangga0214/koa-helloworld)

## Note

Please read [NOTE.md](NOTE.md), before getting started.

## Getting started

Install dependencies.

```bash
yarn install
```

Copy and edit **.env** file as you want. Note that the server requires **.env** file, as it does not have any "default" values.

```bash
cp .env.example .env
```

Run the server. There is no command dedicated to local development environment (e.g. `yarn dev`). Both production and development use the same command.

```bash
yarn start
```

## Yarn scripts

```bash
yarn test # run all tests (run jest for all "*.test.js")
yarn test:unit # run unit test
yarn test:integration # run integration test
yarn test:coverage # run all test and measure coverage
yarn test:coverage:unit # run unit test and measure coverage
yarn test:coverage:integration # run integration test and measure coverage

yarn lint # lint and format with eslint and prettier
```

## License

[MIT License](license). Copyright &copy; 2019, Gil B. Chan <<bnbcmindnpass@gmail.com>> ([@jjangga0214](https://github.com/jjangga0214))
