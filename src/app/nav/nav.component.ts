import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() navItems = [];
  @Output() onGetArticleIndex = new EventEmitter<number>();

  constructor() {}

  getArticleIndex(ind: number): void {
    this.onGetArticleIndex.emit(ind);
  }

  ngOnInit(): void {}
}
