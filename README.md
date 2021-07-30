# Package Searcher
get info about any package you like, eaither it's from npm or pip.

## Installation

```js npm i tyizo-search ```


## Developer Installation

-  Clone the repo ```git clone https://github.com/tyizo/package-searcher/```
-  After that go to the dictionary where's the package located ```cd package-searcher ```
-  Install the dependencies using ```npm i ```
-  Compaile .ts files by ```tsc ```


## Example usage

```js
// require the package
const { Search } = require("../dist");
// a new search client
const search = new Search();
// npm search
search.npm("nodemon").then((package) => console.log(package));
// pip search
search.pip("autopager").then((package) => console.log(package));
```

## Response

For npm:

 ```ts 
  interface NpmInfo {
    name: string;
    description: string;
    author: string;
    authorGithub: URL;
    homepage: URL;
    keywords: string[];
  }
```

For pip: 

```ts
  interface PipInfo {
    name: string;
    auhor: string;
    auhorEmail: string;
    description: string;
    homepage: URL;
    version: number & symbol;
    keywords: string[];
    authorGithub: URL;
    license: string;
  }
```
