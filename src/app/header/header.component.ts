import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems: string[] = [
    'Home',
    'About',
    'Photos',
    'Details',
    'Shop',
    'Blog',
    'Contact',
  ];

  constructor() {}

  ngOnInit(): void {}
}
