import { Injectable } from '@angular/core';

import { Tile, TILES, Piece } from './model';

@Injectable()
export class ChessboardService {

    constructor() { }

    // getTiles(): Tile[] {    // Returns Synchonous: should change to Async if return from server
    //     return TILES;
    // }

    getTiles(): Promise<Tile[]> {    // Async
        console.log(TILES);
        return Promise.resolve(TILES);
    }

    // getPieces(): Promise<Piece[]> {    // Async
    //     console.log(PIECES);
    //     return Promise.resolve(PIECES);
    // }

}