# Nuxt Logger

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt logger for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/nasontech/nuxt-logger?file=playground%2Fapp.vue)

## Features

Pretty logging.

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @nasontech/nuxt-logger
```

That's it! You can now use `useLogger` in your Nuxt app in both client and server ✨

```typescript
const logger = useLogger()
logger.info('Hello world!')
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nasontech/nuxt-logger/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@nasontech/nuxt-logger
[npm-downloads-src]: https://img.shields.io/npm/dm/@nasontech/nuxt-logger.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@nasontech/nuxt-logger
[license-src]: https://img.shields.io/npm/l/@nasontech/nuxt-logger.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@nasontech/nuxt-logger
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
