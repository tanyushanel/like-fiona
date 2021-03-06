import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles = [
    {
      title: 'content marketing',
      subTitle: 'for sunkissed creatives',
      text:
        'Write a short pitch about who you are and what you do so people know exactly what to expect right from the start.',
      img: '../../assets/images/big6.jpg',
    },
    {
      title: '',
      subTitle: 'hey you!',
      text:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Cum sociis natoque penatibus.',
      img: '../../assets/images/big7.jpg',
    },
    {
      title: 'content marketing',
      subTitle: 'for sunkissed creatives',
      text:
        'Write a short pitch about who you are and what you do so people know exactly what to expect right from the start.',
      img: '../../assets/images/big6.jpg',
    },
    {
      title: 'content marketing',
      subTitle: 'for sunkissed creatives',
      text:
        'Write a short pitch about who you are and what you do so people know exactly what to expect right from the start.',
      img: '../../assets/images/big6.jpg',
    },
    {
      title: 'content marketing',
      subTitle: 'for sunkissed creatives',
      text:
        'Write a short pitch about who you are and what you do so people know exactly what to expect right from the start.',
      img: '../../assets/images/big6.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
