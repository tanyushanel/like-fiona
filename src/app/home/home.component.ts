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
      btn: 'learn more',
      href: '',
    },
    {
      title: '',
      subTitle: 'hey you!',
      text:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Cum sociis natoque penatibus.',
      img: '../../assets/images/big7.jpg',
      btn: 'about me',
      href: '',
    },
    {
      title: 'recent work',
      subTitle: 'la-la-la',
      text:
        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.',
      img: '../../assets/images/big5.jpg',
      btn: '',
      href: '',
    },
    {
      title: 'projects',
      subTitle: 'the experience',
      text:
        'The experienceLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
      img: '../../assets/images/big9.jpg',
      btn: 'show gallery',
      href: '',
    },
    {
      title: 'content marketing',
      subTitle: 'for sunkissed creatives',
      text:
        'Write a short pitch about who you are and what you do so people know exactly what to expect right from the start.',
      img: '../../assets/images/big10.jpg',
      btn: 'about me',
      href: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
