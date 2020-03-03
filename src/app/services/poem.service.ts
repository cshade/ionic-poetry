import { Injectable } from '@angular/core';
import { Poem } from '../poem';

@Injectable({
  providedIn: 'root'
})
export class PoemService {

  poem: Poem;

  constructor( ) { 
    this.poem = {
      title: `Suicide's Note`,
      body: `The calm,
        <br/>Cool face of the river
        <br/>Asked me for a kiss.`,
      author: `Langston Hughes`
    }

  }

  getPoem(): Poem {
    return this.poem;
  }

  getRandomPoem(): Poem {
    return this.poem;
  }
}
