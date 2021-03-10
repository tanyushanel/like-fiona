import { Component, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article/article.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  article: Article = {
    title: 'contact',
    subTitle: 'nice to meet you',
    text: ``,
    img: '../../assets/images/big10.jpg',
    btn: ``,
    href: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
