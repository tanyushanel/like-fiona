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
    { title: 'Details', href: '#2' },
    { title: 'Blog', href: '#3' },
    { title: 'Photos', href: '#gallery' },
    { title: 'Shop', href: '#shop' },
    { title: 'Contact', href: '#contact' },
  ];

  constructor() {}

  getArticleIndex(ind: number): void {
    this.onGetArticleIndex.emit(ind);
  }
  ngOnInit(): void {}
}
