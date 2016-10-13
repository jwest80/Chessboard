import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { ChessboardComponent }  from './chessboard/chessboard.component';

@NgModule({
  imports:      [ BrowserModule, CommonModule ],
  declarations: [ 
    AppComponent ,
    ChessboardComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
