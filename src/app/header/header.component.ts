import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onGetArticleIndex = new EventEmitter<number>();
  navItems = [
    { title: 'Home', href: '#0' },
    { title: 'About', href: '#1' },
    { title: 'Photos', href: '#3' },
    { title: 'Details', href: '#4' },
    { title: 'Shop', href: '#5' },
    { title: 'Blog', href: '#6' },
    { title: 'Contact', href: '#7' },
  ];

  constructor() {}

  getArticleIndex(ind: number): void {
    this.onGetArticleIndex.emit(ind);
  }
  ngOnInit(): void {}
}
