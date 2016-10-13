"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var chessboard_service_1 = require('./chessboard.service');
var ChessboardComponent = (function () {
    function ChessboardComponent(chessboardService) {
        this.chessboardService = chessboardService;
    }
    // Functions
    ChessboardComponent.prototype.getTiles = function () {
        var _this = this;
        this.chessboardService.getTiles().then(function (tiles) { return _this.tiles = tiles; });
    };
    ChessboardComponent.prototype.getPieces = function () {
        var _this = this;
        this.chessboardService.getPieces().then(function (pieces) { return _this.pieces = pieces; });
    };
    // Init Learn more about Lifecycle Hooks: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
    ChessboardComponent.prototype.ngOnInit = function () {
        this.getTiles();
        this.getPieces();
    };
    ChessboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chessboard',
            //template: `HI`,
            templateUrl: 'chessboard.component.html',
            //styleUrls: [ 'chessboard.component.css' ], 
            providers: [chessboard_service_1.ChessboardService],
        }), 
        __metadata('design:paramtypes', [chessboard_service_1.ChessboardService])
    ], ChessboardComponent);
    return ChessboardComponent;
}());
exports.ChessboardComponent = ChessboardComponent;
//# sourceMappingURL=chessboard.component.js.map