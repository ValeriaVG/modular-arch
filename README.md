# Modular Architecture

This repository contains example implementations of modular architecture for different kinds of apps, following the general rules:

1. Each separate feature should fit entirely in it's own folder.

2. Only imports from shared folders or within current feature folder are allowed.

3. Each feature can be written and structured differently from the others, as long as it has the same "public" interface.

4. Features can be composed of nested features, but it shouldn't be more than two levels deep (up to a grandparent).

5. Code structure should reflect how code is deployed or packaged, if applicable.

## Examples

- [React SPA / Dashboard](/dashboard/) 

## Running examples locally

You'll need [NodeJS 18+](https://nodejs.org/en) installed on you machine.
Run `npm i` to install dependencies and then choose an example to run, e.g. for a `dashboard` run:
`npm run dev -w dashboard` 