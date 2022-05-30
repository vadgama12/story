# About

This repository has two repositories nested in it. So, the structure it looks like, the

- root
  - design-token-transformer
  - lib

## Repo: design-token-transformer

This repository is managed to generate and transform the design tokens that should be consumed by the other repository called "lib" as a typescript file. [Read more](./design-token-transformer/README.md)

## Repo: lib

This repository is the home of the component library which is based on React. [Read more](./lib/README.md)

## How I can start the storybook development server.

Check your node version by running `node -v` in your cli. The version that works is `v16.13.2` (tested) or higher. Then run the following commands one by one,

```
cd design-token-transformer
npm i
npm run generate
cd ../lib
npm i
npm run sb
```
