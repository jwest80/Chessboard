import { Component, OnInit } from '@angular/core';

import { ChessboardComponent } from './chessboard/chessboard.component';

@Component({
  //moduleId: module.id,
  selector: 'my-app',
  //template: `HI`,
  templateUrl: './app/app.component.html',
  //styleUrls: [ 'app.component.css' ],
  providers: [],
})

export class AppComponent implements OnInit { 

  constructor() { }

  // Init Learn more about Lifecycle Hooks: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngOnInit(): void { 

  }
}

