import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  navItems = [
    { title: 'Instagram', href: '' },
    { title: 'Facebook', href: '' },
    { title: 'Pinterest', href: '' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
