import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'like-fiona';
  index: number = 0;

  getArticleIndex(ind: number): void {
    this.index = ind;
  }
}
