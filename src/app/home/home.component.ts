import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles = [
    {
      title: 'hey you!',
      subTitle: 'you are child in my head',
      text: `You haven't walked yet Your first words have yet to be said But I swear you'll be blessed I know youre still just a dream your eyes might be green Or the bluest that I've ever seen Anyway.`,
      img: '../../assets/images/big6.jpg',
      btn: `you'll be blessed`,
      href: '',
    },
    {
      title: `I know you're still`,
      subTitle: 'just a dream',
      text: `Your eyes might be green Or the bluest that I've ever seen Anyway`,
      img: '../../assets/images/big7.jpg',
      btn: `you'll be blessed`,
      href: '',
    },
    {
      title: 'And you',
      subTitle: `you'll be blessed`,
      text: `You'll have the best I promise you that I'll pick a star from the sky Pull your name from a hat I promise you that, promise you that`,
      img: '../../assets/images/big5.jpg',
      btn: `promise you that`,
      href: '',
    },
    {
      title: `you'll be blessed`,
      subTitle: 'la-la-la',
      text: `I need you before I'm too old To have and to hold`,
      img: '../../assets/images/big9.jpg',
      btn: 'To walk with you',
      href: '',
    },
    {
      title: 'and watch you grow',
      subTitle: 'for sunkissed creatives',
      text: `And know that you're blessed`,
      img: '../../assets/images/big10.jpg',
      btn: `you'll be blessed`,
      href: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
