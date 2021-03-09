import { GalleryService } from './gallery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: string[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.images = this.galleryService.images;
  }
}
