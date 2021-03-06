# Typescript/jQuery/Bootstrap

## Overview

In teaching Typescript in my bootcamp, I ways wanted to use the browser to allow students to test their work. That works ok when there is only one Typescript file. But as soon as the topic of using classes in Typescript and needing multiple files to accomplish a task, the use of the browse is not an option anymore. At that point, a bundler is needed so that app can be run in the browser.

An additional issue has to do with jQuery. When not using Angular, I think jQuery is the next best thing for web applications. So I wanted to add jQuery to the Typescript code.

The result is this project. It is a simple one which puts a string of text into a control on a web page using all the technologies mentioned.

## Project Structure

Below is the basic project structure:
```
<root>
  |-- dist/
       |-- bundle.js
  |-- node_modules/
  |-- src/
       |-- app.ts
  |-- .gitignore
  |-- index.html
  |-- package.json
  |-- package-lock.json
  |-- tsconfig.json
  |-- webpack.config.js
  |-- README.md
```

### folders

There are three folders: dist, src, and node_modules

#### dist

The `dist` folder contains one file which is the bundled, transpiled Javascript which is used when the application runs. It is generated automatically and must be include in the index.html file via a normal `<script>` tag.

#### src

The `src` folder is where all the source files exist along with any new files created. The transpiler and bundler looks for changes in this folder.

#### node_modules

The `node_modules` is the set of Node packages used in the application. It is managed by NPM.

### files

* index.html

      <!doctype html>
      <html lang="en">
      <head>
        <title></title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      </head>
      <body>
      </body>
        <p id="p"></p>
        <script src="bundle.js"></script>
      </html>

* package.json & package-lock.json (Configuration for node packages)
* tsconfig.json (Configuration file for Typescript)

      {
        "compilerOptions": {
          "module": "commonjs",
          "target": "es5",
          "sourceMap": true,
          "outDir": "./src/",
          "noImplicitAny": true
        },
        "exclude": [
          "node_modules"
        ],
        "include": [
          "src/*"
        ],
        "compileOnSave": true
      }

* webpack.config.js (Configuration file for Webpack)

      module.exports = {
          entry: "./src/app.ts",
          mode: "development", // or production
          output: {
              filename: "bundle.js",
              path: __dirname
          },
          module: {
            rules: [
              {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
              }
            ]
          },
          resolve: {
            // Add `.ts` as a resolvable extension.
            extensions: [".ts", ".js"]
          }
      }

* .gitignore (files to be ignored by Git/GitHub)

      node_modules/

* README.md (this file)

## Node packages

- Typescript           : `npm install typescript --save`
- Typescript loader    : `npm install ts-loader --save`
- jQuery               : `npm install @types/jquery --save`
- Bootstrap            : `npm install @types/bootstrap --save`
- Webpack              : `npm install webpack webpack-cli webpack-dev-server --save-dev`

## Running the application

      npm start

##### Greg Doud | Bootcamp Instructor | MAX Technical Training