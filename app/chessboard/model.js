"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Position = (function () {
    function Position() {
    }
    return Position;
}());
var Piece = (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        _super.apply(this, arguments);
    }
    return Piece;
}(Position));
exports.Piece = Piece;
exports.PIECES = [
    { id: 1, position: 'a8', rank: '8', file: 'a', type: 'rook', color: 'black' },
    { id: 2, position: 'b8', rank: '8', file: 'b', type: 'knight', color: 'black' },
    { id: 3, position: 'c8', rank: '8', file: 'c', type: 'bishop', color: 'black' },
    { id: 4, position: 'd8', rank: '8', file: 'd', type: 'king', color: 'black' },
    { id: 5, position: 'e8', rank: '8', file: 'e', type: 'queen', color: 'black' },
    { id: 6, position: 'f8', rank: '8', file: 'f', type: 'bishop', color: 'black' },
    { id: 7, position: 'g8', rank: '8', file: 'g', type: 'knight', color: 'black' },
    { id: 8, position: 'h8', rank: '8', file: 'h', type: 'rook', color: 'black' },
    { id: 1, position: 'a7', rank: '7', file: 'a', type: 'pawn', color: 'black' },
    { id: 2, position: 'b7', rank: '7', file: 'b', type: 'pawn', color: 'black' },
    { id: 3, position: 'c7', rank: '7', file: 'c', type: 'pawn', color: 'black' },
    { id: 4, position: 'd7', rank: '7', file: 'd', type: 'pawn', color: 'black' },
    { id: 5, position: 'e7', rank: '7', file: 'e', type: 'pawn', color: 'black' },
    { id: 6, position: 'f7', rank: '7', file: 'f', type: 'pawn', color: 'black' },
    { id: 7, position: 'g7', rank: '7', file: 'g', type: 'pawn', color: 'black' },
    { id: 8, position: 'h7', rank: '7', file: 'h', type: 'pawn', color: 'black' },
    { id: 1, position: 'a2', rank: '2', file: 'a', type: 'pawn', color: 'white' },
    { id: 2, position: 'b2', rank: '2', file: 'b', type: 'pawn', color: 'white' },
    { id: 3, position: 'c2', rank: '2', file: 'c', type: 'pawn', color: 'white' },
    { id: 4, position: 'd2', rank: '2', file: 'd', type: 'pawn', color: 'white' },
    { id: 5, position: 'e2', rank: '2', file: 'e', type: 'pawn', color: 'white' },
    { id: 6, position: 'f2', rank: '2', file: 'f', type: 'pawn', color: 'white' },
    { id: 7, position: 'g2', rank: '2', file: 'g', type: 'pawn', color: 'white' },
    { id: 8, position: 'h2', rank: '2', file: 'h', type: 'pawn', color: 'white' },
    { id: 1, position: 'a1', rank: '1', file: 'a', type: 'rook', color: 'white' },
    { id: 2, position: 'b1', rank: '1', file: 'b', type: 'knight', color: 'white' },
    { id: 3, position: 'c1', rank: '1', file: 'c', type: 'bishop', color: 'white' },
    { id: 4, position: 'd1', rank: '1', file: 'd', type: 'king', color: 'white' },
    { id: 5, position: 'e1', rank: '1', file: 'e', type: 'queen', color: 'white' },
    { id: 6, position: 'f1', rank: '1', file: 'f', type: 'bishop', color: 'white' },
    { id: 7, position: 'g1', rank: '1', file: 'g', type: 'knight', color: 'white' },
    { id: 8, position: 'h1', rank: '1', file: 'h', type: 'rook', color: 'white' },
];
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        _super.apply(this, arguments);
    }
    return Tile;
}(Position));
exports.Tile = Tile;
exports.TILES = [
    { id: 1, position: 'a8', rank: '8', file: 'a' },
    { id: 2, position: 'b8', rank: '8', file: 'b' },
    { id: 3, position: 'c8', rank: '8', file: 'c' },
    { id: 4, position: 'd8', rank: '8', file: 'd' },
    { id: 5, position: 'e8', rank: '8', file: 'e' },
    { id: 6, position: 'f8', rank: '8', file: 'f' },
    { id: 7, position: 'g8', rank: '8', file: 'g' },
    { id: 8, position: 'h8', rank: '8', file: 'h' },
    { id: 1, position: 'a7', rank: '7', file: 'a' },
    { id: 2, position: 'b7', rank: '7', file: 'b' },
    { id: 3, position: 'c7', rank: '7', file: 'c' },
    { id: 4, position: 'd7', rank: '7', file: 'd' },
    { id: 5, position: 'e7', rank: '7', file: 'e' },
    { id: 6, position: 'f7', rank: '7', file: 'f' },
    { id: 7, position: 'g7', rank: '7', file: 'g' },
    { id: 8, position: 'h7', rank: '7', file: 'h' },
    { id: 1, position: 'a6', rank: '6', file: 'a' },
    { id: 2, position: 'b6', rank: '6', file: 'b' },
    { id: 3, position: 'c6', rank: '6', file: 'c' },
    { id: 4, position: 'd6', rank: '6', file: 'd' },
    { id: 5, position: 'e6', rank: '6', file: 'e' },
    { id: 6, position: 'f6', rank: '6', file: 'f' },
    { id: 7, position: 'g6', rank: '6', file: 'g' },
    { id: 8, position: 'h6', rank: '6', file: 'h' },
    { id: 1, position: 'a5', rank: '5', file: 'a' },
    { id: 2, position: 'b5', rank: '5', file: 'b' },
    { id: 3, position: 'c5', rank: '5', file: 'c' },
    { id: 4, position: 'd5', rank: '5', file: 'd' },
    { id: 5, position: 'e5', rank: '5', file: 'e' },
    { id: 6, position: 'f5', rank: '5', file: 'f' },
    { id: 7, position: 'g5', rank: '5', file: 'g' },
    { id: 8, position: 'h5', rank: '5', file: 'h' },
    { id: 1, position: 'a4', rank: '4', file: 'a' },
    { id: 2, position: 'b4', rank: '4', file: 'b' },
    { id: 3, position: 'c4', rank: '4', file: 'c' },
    { id: 4, position: 'd4', rank: '4', file: 'd' },
    { id: 5, position: 'e4', rank: '4', file: 'e' },
    { id: 6, position: 'f4', rank: '4', file: 'f' },
    { id: 7, position: 'g4', rank: '4', file: 'g' },
    { id: 8, position: 'h4', rank: '4', file: 'h' },
    { id: 1, position: 'a3', rank: '3', file: 'a' },
    { id: 2, position: 'b3', rank: '3', file: 'b' },
    { id: 3, position: 'c3', rank: '3', file: 'c' },
    { id: 4, position: 'd3', rank: '3', file: 'd' },
    { id: 5, position: 'e3', rank: '3', file: 'e' },
    { id: 6, position: 'f3', rank: '3', file: 'f' },
    { id: 7, position: 'g3', rank: '3', file: 'g' },
    { id: 8, position: 'h3', rank: '3', file: 'h' },
    { id: 1, position: 'a2', rank: '2', file: 'a' },
    { id: 2, position: 'b2', rank: '2', file: 'b' },
    { id: 3, position: 'c2', rank: '2', file: 'c' },
    { id: 4, position: 'd2', rank: '2', file: 'd' },
    { id: 5, position: 'e2', rank: '2', file: 'e' },
    { id: 6, position: 'f2', rank: '2', file: 'f' },
    { id: 7, position: 'g2', rank: '2', file: 'g' },
    { id: 8, position: 'h2', rank: '2', file: 'h' },
    { id: 1, position: 'a1', rank: '1', file: 'a' },
    { id: 2, position: 'b1', rank: '1', file: 'b' },
    { id: 3, position: 'c1', rank: '1', file: 'c' },
    { id: 4, position: 'd1', rank: '1', file: 'd' },
    { id: 5, position: 'e1', rank: '1', file: 'e' },
    { id: 6, position: 'f1', rank: '1', file: 'f' },
    { id: 7, position: 'g1', rank: '1', file: 'g' },
    { id: 8, position: 'h1', rank: '1', file: 'h' },
];
//# sourceMappingURL=model.js.map