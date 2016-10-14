# Chessboard

## To Do List
    * Rotate Chessboard
    * Add/Remove Piece funtions
        * Unit Testing 
    * Change Appearence
    * Drag and Drop pieces - 
        * Read HTML5 Docs: https://html.spec.whatwg.org/#dnd
        * Drop Anywhere
        * Add/Remove pieces from board
        * Allow Drop on tiles (squares)
        * Conflict Detection (cant drop on own pieces, remove enemy pieces)
        * Allow Drop on legal moves?
        * Record and display move List
        * Allow iteration through moves
    * Learn to use SASS?
    * Read about: systemjs / webpack


## Setup less 
    * css compiler language
    * uses regular css
    * can use @Variables
    * can use .MIXINS  (like nested css classes - child/parent objects)

**Install:  \> `npm install less -g`**  
**Compile:  \> `lessc input.less > output.css`**  

Simple less example:  *(Deprecated: Chessboard html markup has different structure than used by rest of application.)*
less
    \---chessboard.html
     ---chessboard.less

## Angular 2 and TypeScript - 5 Min Quick Start
    * package.json - identifies npm package dependencies.
    * tsconfig.json - defines how the TypeScript compiler generates JavaScript.
    * typings.json - definition files for libraries the TypeScript compiler doesn't natively recognize.
    * systemjs.config.js - provides information to a module loader about where to find application modules, 
      and registers all the necessary packages.

    Install Packages: \> npm install
    Typings Install: \> npm run typings install  (may not be necessary)

### Angular Setup: 
    chessboard
        \---app 
        |   \---app.module.ts
        |    ---app.component.ts
        |    ---app.module.ts
        |    ---main.ts
        |---index.html

**Run Application: \> `npm start`**

## Create Chessboard

    The `<chessboard>` chessboard.component is responsible for generating the board, tiles, and pieces.  
        * __chessboard.component.html__ (Template) - Lays out the board as 64 div tiles (floated left) within a board ontainer.  Each tile may contain a piece div.  
        * __chessboard.component.ts__ 
        * __chessboard.service.ts__ - Responsible for retrieving board setup data. (Tiles, Pieces)
        * __model.ts__ - Entites (Tile, Piece) and board setup data.
        * __chessboard.css__ - Originally created in .less... I broke the watcher and started updating it manually.  I plan to give SASS a look later, but for now css 
        compiling is on hold (NG2 uses SASS, not sure how it all works with components) 
          
    
