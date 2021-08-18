# DO NOT USE. THIS PROJECT WILL BE REMOVED. `eslint-config-popcorn` 



> [ESLint](https://eslint.org/), [TypeScript](https://github.com/typescript-eslint/typescript-eslint), [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [Prettier](https://prettier.io/) configurations for use with Node.js and React

## Included ESLint configurations and plugins

 | name                              | javascript | typescript | typescript-react |
 | --------------------------------- | ---------- | ---------- | ---------------- |
 | @typescript-eslint/eslint-plugin  |            |  x         |  x               |
 | @typescript-eslint/parser         |            |  x         |  x               |
 | eslint                            |  x         |  x         |  x               |
 | eslint-config-airbnb              |            |            |  x               |
 | eslint-config-airbnb-base         |  x         |  x         |  x               |
 | eslint-config-prettier            |  x         |  x         |  x               |
 | eslint-import-resolver-typescript |            |  x         |  x               |
 | eslint-plugin-import              |  x         |  x         |  x               |
 | eslint-plugin-jsx-a11y            |            |            |  x               |
 | eslint-plugin-prettier            |  x         |  x         |  x               |
 | eslint-plugin-react               |            |            |  x               |
 | eslint-plugin-react-hooks         |            |            |  x               |
 | eslint-plugin-unused-imports      |  x         |  x         |  x               |
 | prettier                          |  x         |  x         |  x               |
 | typescript                        |            |  x         |  x               |

## What

This setup treats the specific configurations for JavaScript, TypeScript and TypeScript + React as first class citizens.

What this means is the following:

- Only installs required peer dependencies for language specific configurations.
- Override-based configurations, not a one size fits all configuration.

## Usage

### Installation

Install this configuration in your project

```sh
yarn add eslint-config-popcorn
```

### Environment specific installation

#### JavaScript

Install peer dependencies

```sh
npx eslint-config-popcorn installPeerDeps javascript
```

Update your eslint configuration

```js
{
   extends: ["popcorn/javascript"]
}
```

#### TypeScript

Install peer dependencies

```sh
npx eslint-config-popcorn installPeerDeps typescript
```

Update your eslint configuration

```js
{
   extends: ["popcorn/typescript"]
}
```

#### TypeScript and React

Install peer dependencies

```sh
npx eslint-config-popcorn installPeerDeps typescript-react
```

Update your eslint configuration

```js
{
   extends: ["popcorn/typescript-react"]
}
```
