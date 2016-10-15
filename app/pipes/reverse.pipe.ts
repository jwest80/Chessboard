import { Pipe } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe {
  transform(value, flipped) {
    console.log(flipped);
    if (value) {
        if (flipped)
          return value.slice().reverse();
        else
          return value;
    } else {
      return [];
    }
  }
}