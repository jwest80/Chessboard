export class Piece {
  id: number;
  position: string;
  rank: string;
  file: string;
  type: string;
  color: string;
}

export const PIECES: Piece[] = [

  {id: 1, position: 'a8', rank: '8', file: 'a', type: 'rook', color: 'black'},
  {id: 2, position: 'b8', rank: '8', file: 'b', type: 'knight', color: 'black'},
  {id: 3, position: 'c8', rank: '8', file: 'c', type: 'bishop', color: 'black'},
  {id: 4, position: 'd8', rank: '8', file: 'd', type: 'king', color: 'black'},
  {id: 5, position: 'e8', rank: '8', file: 'e', type: 'queen', color: 'black'},
  {id: 6, position: 'f8', rank: '8', file: 'f', type: 'bishop', color: 'black'},
  {id: 7, position: 'g8', rank: '8', file: 'g', type: 'knight', color: 'black'},
  {id: 8, position: 'h8', rank: '8', file: 'h', type: 'rook', color: 'black'},

  {id: 1, position: 'a7', rank: '7', file: 'a', type: 'pawn', color: 'black'},
  {id: 2, position: 'b7', rank: '7', file: 'b', type: 'pawn', color: 'black'},
  {id: 3, position: 'c7', rank: '7', file: 'c', type: 'pawn', color: 'black'},
  {id: 4, position: 'd7', rank: '7', file: 'd', type: 'pawn', color: 'black'},
  {id: 5, position: 'e7', rank: '7', file: 'e', type: 'pawn', color: 'black'},
  {id: 6, position: 'f7', rank: '7', file: 'f', type: 'pawn', color: 'black'},
  {id: 7, position: 'g7', rank: '7', file: 'g', type: 'pawn', color: 'black'},
  {id: 8, position: 'h7', rank: '7', file: 'h', type: 'pawn', color: 'black'},

  {id: 1, position: 'a2', rank: '2', file: 'a', type: 'pawn', color: 'white'},
  {id: 2, position: 'b2', rank: '2', file: 'b', type: 'pawn', color: 'white'},
  {id: 3, position: 'c2', rank: '2', file: 'c', type: 'pawn', color: 'white'},
  {id: 4, position: 'd2', rank: '2', file: 'd', type: 'pawn', color: 'white'},
  {id: 5, position: 'e2', rank: '2', file: 'e', type: 'pawn', color: 'white'},
  {id: 6, position: 'f2', rank: '2', file: 'f', type: 'pawn', color: 'white'},
  {id: 7, position: 'g2', rank: '2', file: 'g', type: 'pawn', color: 'white'},
  {id: 8, position: 'h2', rank: '2', file: 'h', type: 'pawn', color: 'white'},

  {id: 1, position: 'a1', rank: '1', file: 'a', type: 'rook', color: 'white'},
  {id: 2, position: 'b1', rank: '1', file: 'b', type: 'knight', color: 'white'},
  {id: 3, position: 'c1', rank: '1', file: 'c', type: 'bishop', color: 'white'},
  {id: 4, position: 'd1', rank: '1', file: 'd', type: 'king', color: 'white'},
  {id: 5, position: 'e1', rank: '1', file: 'e', type: 'queen', color: 'white'},
  {id: 6, position: 'f1', rank: '1', file: 'f', type: 'bishop', color: 'white'},
  {id: 7, position: 'g1', rank: '1', file: 'g', type: 'knight', color: 'white'},
  {id: 8, position: 'h1', rank: '1', file: 'h', type: 'rook', color: 'white'},


];