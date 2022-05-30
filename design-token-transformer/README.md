# About

This repository is managed to generate and export the design tokens that can be consumed by the other repository called "lib" as a typescript file.

### How to generate the tokens

to generate tokens and transform them to js objects directly run:

```
npm run generate
```

to build tokens from the json file exported by the figma plugin run:

```
npm run build-tokens
```

to transform tokens from js variables to js light/dark/common objects run: 

```
npm run export-ts
```
