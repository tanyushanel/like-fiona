import { Component, Input, OnInit } from '@angular/core';

export class Article {
  title: string;
  subTitle: string;
  text: string;
  img: string;
  btn: string;
  href: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
