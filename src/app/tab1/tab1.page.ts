import { PoemService } from './../services/poem.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private poemService: PoemService) {
    this.poemTitle = `SUICIDE'S NOTE`
    this.poemBody = `The calm,
    <br/>Cool face of the river
    <br/>Asked me for a kiss.`
    this.poemByline = `by Langston Hughes`
  }

  poemTitle: string;
  poemBody: string;
  poemByline: string;

  getRandomPoem() {
    console.log("page TS calling get random poem");
    this.poemTitle = this.poemService.getPoemTitle();
    this.poemBody = this.poemService.getPoemBody();
    this.poemByline = this.poemService.getPoemByline();
  }

}
