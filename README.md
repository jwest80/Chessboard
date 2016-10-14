"# Chessboard"

== == == 10/01/2016 == == ==

## To Do List ##
    * Rotate Chessboard
    * Drag and Drop pieces
        * Drop Anywhere
        * Drop on tiles (squares)
        * Drop on legal moves
        * 
    * Learn to use SASS?
    * Read about: systemjs / webpack


## Setup less ## 
    * css compiler language
    * uses regular css
    * can use @Variables
    * can use .MIXINS  (like nested css classes - child/parent objects)

    Install:  \> npm install less -g
    Compile:  \> lessc input.less > output.css

    Simple less example:  (Deprecated: Chessboard html markup has different structure than used by rest of application.)
    less
        \---chessboard.html
         ---chessboard.less

## Angular 2 and TypeScript - 5 Min Quick Start ##
Configuration files:
    * package.json - identifies npm package dependencies.
    * tsconfig.json - defines how the TypeScript compiler generates JavaScript.
    * typings.json - definition files for libraries the TypeScript compiler doesn't natively recognize.
    * systemjs.config.js - provides information to a module loader about where to find application modules, 
      and registers all the necessary packages.

    Install Packages: \> npm install
    Typings Install: \> npm run typings install  (may not be necessary)

Angular Setup
    * create /app 
    * /app/app.module.ts
    * /app/app.component.ts
    * /app/main.ts
    * /index.html

    Run Application: \> npm start

## Create Chessboard ##

The <chessboard> chessboard.component is responsible for generating the board, tiles, and pieces.  
    * chessboard.component.html (Template) - Lays out the board as 64 div tiles (floated left) within a board ontainer.  Each tile may contain a piece div.  
    * chessboard.component.ts 
    * chessboard.service.ts - Responsible for retrieving board setup data. (Tiles, Pieces)
    * model.ts - Entites (Tile, Piece) and board setup data.
    * chessboard.css - Originally created in .less... I broke the watcher and started updating it manually.  I plan to give SASS a look later, but for now css 
      compiling is on hold (NG2 uses SASS, not sure how it all works with components) 
          
    
