import { Component } from '@angular/core';
import { PoemService } from './../services/poem.service';
import { Poem } from '../poem';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private poem: Poem;

  constructor(private poemService: PoemService) {
  }

  getRandomPoem():Poem {
    return this.poemService.getRandomPoem();
  }

  getPoemTitle():string {
    if (!this.poem) {
      this.poem = this.poemService.getPoem()
    }
    return this.poem.title;
  }

  getPoemAuthor():string {
    if (!this.poem) {
      this.poem = this.poemService.getPoem()
    }
    return this.poem.author;
  }

  getPoemBody():string {
    if (!this.poem) {
      this.poem = this.poemService.getPoem()
    }
    return this.poem.body;
  }
}
