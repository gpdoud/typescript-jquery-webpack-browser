# Typescript/jQuery/Bootstrap

## Running in a browser

In teaching Typescript in my bootcamp, I ways wanted to use the browser to allow students to test their work. That works ok when there is only one Typescript file. But as soon as the topic of using classes in Typescript and needing multiple files to accomplish a task, the use of the browse is not an option anymore. At that point, a bundler is needed so that app can be run in the browser.

An additional issue has to do with jQuery. When not using Angular, I think jQuery is the next best thing for web applications. So I wanted to add jQuery to the Typescript code.

The result is this project. It is a simple one which puts a string of text into a control on a web page using all the technologies mentioned.

## Project Structure

Below is the basic project structure:
```
<root>
  |-- dist
  |-- node_modules
  |-- src
  .gitignore
  index.html
  package.json
  package-lock.json
  tsconfig.json
  webpack.config.js
  README.md
```

### folders

    * dist
    * node_modules
    * src

### files

    * index.html
    * package.json & package-lock.json
    * tsconfig.json
    * webpack.config.js
    * .gitignore
    * README.md

## Node packages

    - Typescript           : npm install typescript --save
    - Typescript loader    : npm install ts-loader --save
    - jQuery               : npm install @types/jquery --save
    - Webpack              : npm install webpack webpack-dev-server --save-dev

##### Greg Doud | Bootcamp Instructor | MAX Technical Training