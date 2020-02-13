import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoemService {

  private userTheme: string;

  constructor() { }

  public getPoemBody() {
    return "This is random poem " + Math.floor(Math.random() * Math.floor(10));
  }
  public getPoemTitle() {
    return "TITLE";
  }
  public getPoemByline() {
    return "by a poet"
  }
}
