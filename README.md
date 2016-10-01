"# Chessboard"

== == == 10/01/2016 == == ==

## For Later ##
    * What folders need to be checked into GIT?
    * SASS?
    * systemjs / webpack
    * .less - if/else?  loops?

## Create Layout ##
 What is .less?  
    * css compiler language
    * uses regular css
    * can use @Variables
    * can use .MIXINS  (like nested css classes - child/parent objects)


    Install:  \> npm install less -g
    Compile:  \> lessc input.less > output.css

## Angular 2 and TypeScript - 5 Min Quick Start ##
Configuration files:
    * package.json - identifies npm package dependencies.
    * tsconfig.json - defines how the TypeScript compiler generates JavaScript.
    * typings.json - definition files for libraries the TypeScript compiler doesn't natively recognize.
    * systemjs.config.js - provides information to a module loader about where to find application modules, 
      and registers all the necessary packages.

    Install Packages: \> npm install
    Typings Install: \> npm run typings install  (may not be necessary)

App Setup
    * create /app 
    * /app/app.module.ts
    * /app/app.component.ts
    * /app/main.ts
    * /index.html

    Run Application: \> npm start
