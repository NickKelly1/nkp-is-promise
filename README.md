# @nkp/is-promise

[![npm version](https://badge.fury.io/js/%40nkp%2Fis-promise.svg)](https://www.npmjs.com/package/@nkp/is-promise)
[![deploy status](https://github.com/NickKelly1/nkp-is-promise/actions/workflows/release.yml/badge.svg)](https://github.com/NickKelly1/nkp-is-promise/actions/workflows/release.yml)
[![known vulnerabilities](https://snyk.io/test/github/NickKelly1/nkp-is-promise/badge.svg)](https://snyk.io/test/github/NickKelly1/nkp-is-promise)

Utility functions for determining if values conform to the Promise or PromiseLike interfaces.


```ts
// interface

/**
 * Does the unknown value conform to the Promise interface?
 *
 * @param value the value
 * @returns     whether the value is promise-like
 */
declare function isPromise<T>(value: PromiseLike<T> | unknown): value is Promise<T>;

/**
 * Does the unknown value conform to the PromiseLike interface?
 *
 * @param value the value
 * @returns     whether the value is promise-like
 */
declare function isPromiseLike<T>(value: PromiseLike<T> | unknown): value is PromiseLike<T>;

/**
 * Does the PromiseLike value conform to the Promise interface?
 *
 * @param value the PromiseLike value
 * @returns     whether the value is a Promise
 */
declare function andIsPromise<T>(like: PromiseLike<T>): like is Promise<T>;
```


```ts
// usage

import { isPromise, isPromiseLike, andIsPromise, } from '@nkp/is-promise';

// isPromiseLike
console.log(isPromiseLike(new Promise<void>((res) => res())));      // true
console.log(isPromiseLike(Promise.reject()));                       // true
console.log(isPromiseLike(Promise.resolve().catch(() => {})));      // true
console.log(isPromiseLike({ then() {}, catch() {}, }));             // true
console.log(isPromiseLike({ then: () => {}, catch: () => {}, }));   // true
console.log(isPromiseLike({ then: () => {}, }));                    // true
console.log(isPromiseLike({ catch: () => {}, }));                   // false

// isPromise
console.log(isPromise(new Promise<void>((res) => res())));      // true
console.log(isPromise(Promise.resolve()));                      // true
console.log(isPromise(Promise.reject().catch(() => {})));       // true
console.log(isPromise({ then() {}, catch() {}, }));             // true
console.log(isPromise({ then: () => {}, catch: () => {}, }));   // true
console.log(isPromise({ then: () => {}, }));                    // false
console.log(isPromise({ catch: () => {}, }));                   // false

// andIsPromise
// takes a PromiseLike value and determines if it is actually a promise
```

## Table of contents

- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
  - [pnpm](#pnpm)
  - [Exports](#exports)
- [Updating Dependencies](#updating-dependencies)

## Installation

### NPM

```sh
npm install @nkp/is-promise
```

### Yarn

```sh
yarn add @nkp/is-promise
```

### PNPM

```sh
pnpm add @nkp/is-promise
```

### Exports

`@nkp/is-promise` targets CommonJS and ES modules. To utilise ES modules consider using a bundler like `webpack` or `rollup`.

## Updating dependencies

To update dependencies run one of

```sh
# if npm
# update package.json
npx npm-check-updates -u
# install
npm install

# if yarn
# update package.json
yarn create npm-check-updates -u
# install
yarn

# if pnpm
# update package.json
pnpx npm-check-updates -u
# install
pnpm install
```

## Publishing

To a release a new version:

1. Update the version number in package.json
2. Push the new version to the `master` branch on GitHub
3. Create a `new release` on GitHub for the latest version

This will trigger a GitHub action that tests and publishes the npm package.
