import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  images: string[] = [
    '../../assets/images/gallery/mid1.jpg',
    '../../assets/images/gallery/mid2.jpg',
    '../../assets/images/gallery/mid3.jpg',
    '../../assets/images/gallery/mid4.jpg',
    '../../assets/images/gallery/mid5.jpg',
    '../../assets/images/gallery/mid6.jpg',
    '../../assets/images/gallery/mid7.jpg',
  ];

  constructor() {}
}
