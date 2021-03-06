import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
