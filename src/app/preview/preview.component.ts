import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  width: string;
  height: string;
  @Input() index: number;
  @Input() imgSrc: string;

  altImgSrc =
    'https://legacyogden.com/wp-content/uploads/2015/07/No-Image-Available1.png';

  constructor() {}

  handleImageLoad(event: any): void {
    this.width = event.target.naturalWidth;
    this.height = event.target.naturalHeight;
  }

  ngOnInit() {
    this.imgSrc = '../../assets/images/big6.jpg';
  }
}
