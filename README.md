# koa-helloworld

Demo of koa.

[![license](https://img.shields.io/badge/license-MIT-ff4081.svg?style=flat-square&labelColor=black)](./LICENSE)
[![test](https://img.shields.io/badge/test-jest-7c4dff.svg?style=flat-square&labelColor=black)](./jest.config.js)
[![code style:airbnb](https://img.shields.io/badge/code_style-airbnb-448aff.svg?style=flat-square&labelColor=black)](https://github.com/airbnb/javascript)
[![code style:prettier](https://img.shields.io/badge/code_style-prettier-18ffff.svg?style=flat-square&labelColor=black)](https://prettier.io/)
[![.nvmrc](https://img.shields.io/badge/.nvmrc-10-00e676.svg?style=flat-square&labelColor=black)](./.nvmrc)
[![yarn:required](https://img.shields.io/badge/yarn-required-aeea00.svg?style=flat-square&labelColor=black)](https://yarnpkg.com/en/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-ffab00.svg?style=flat-square&labelColor=black)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-cz_conventional_changelog-dd2c00.svg?style=flat-square&labelColor=black)](http://commitizen.github.io/cz-cli/)
[![pr welcome](https://img.shields.io/badge/PRs-welcome-09FF33.svg?style=flat-square&labelColor=black)]()

[![CircleCI](https://circleci.com/gh/jjangga0214/koa-helloworld.svg?style=svg)](https://circleci.com/gh/jjangga0214/koa-helloworld)
[![codecov](https://codecov.io/gh/jjangga0214/koa-helloworld/branch/master/graph/badge.svg?style=flat-square&labelColor=black)](https://codecov.io/gh/jjangga0214/koa-helloworld)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9f602a8d2d2a4ba3bb9bab0695247ac6)](https://app.codacy.com/app/jjangga0214/koa-helloworld?utm_source=github.com&utm_medium=referral&utm_content=jjangga0214/koa-helloworld&utm_campaign=Badge_Grade_Dashboard)
[![codebeat badge](https://codebeat.co/badges/e8c4d4c3-8c45-4a6b-83b4-457007ac6bf0)](https://codebeat.co/projects/github-com-jjangga0214-koa-helloworld-master)
[![DeepScan grade](https://deepscan.io/api/teams/4834/projects/6595/branches/55635/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=4834&pid=6595&bid=55635)
[![CodeFactor](https://www.codefactor.io/repository/github/jjangga0214/koa-helloworld/badge)](https://www.codefactor.io/repository/github/jjangga0214/koa-helloworld)
[![Greenkeeper badge](https://badges.greenkeeper.io/jjangga0214/koa-helloworld.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjjangga0214%2Fkoa-helloworld.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjjangga0214%2Fkoa-helloworld?ref=badge_shield)

## Note

Please read [NOTE.md](./NOTE.md), before getting started.

## Getting started

Install dependencies.

```bash
yarn install
```

Copy and edit **.env** file as you want. Note that the server does not populate any "default" values for environment variables. So, it requires a file **.env.dev**(for development environment) or **.env.prod**(for production environment).

```bash
cp .env.example .env.dev
cp .env.example .env.prod
```

Run the server.

```bash
# on local development environment
yarn dev

# on production environment
yarn start
```

## Yarn scripts

```bash
# api server
yarn dev # runs server on local dev environment
yarn start # runs server on production environment

# tests
yarn test # runs all tests
yarn test:unit # runs unit tests
yarn test:integration # runs integration tests
yarn test:coverage # runs all tests and measures coverage
yarn test:unit:coverage # runs unit tests and measures coverage
yarn test:integration:coverage # runs integration tests and measures coverage

# others
yarn lint # lints and formats with eslint, prettier, and markdownlint.
yarn release # creates a release tag, writes CHANGELOG.md and commit.
```

## License

[MIT License](./LICENSE). Copyright &copy; 2019, Gil B. Chan <[bnbcmindnpass@gmail.com](mailto:bnbcmindnpass@gmail.com)> ([@jjangga0214](https://github.com/jjangga0214))


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjjangga0214%2Fkoa-helloworld.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjjangga0214%2Fkoa-helloworld?ref=badge_large)