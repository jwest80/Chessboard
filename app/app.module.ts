import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { ChessboardComponent }  from './chessboard/chessboard.component';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  imports:      [ BrowserModule, CommonModule ],
  declarations: [ 
    AppComponent ,
    ChessboardComponent,
    ReversePipe,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
