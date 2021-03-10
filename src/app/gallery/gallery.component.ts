import { GalleryService } from './gallery.service';
import { Component, OnInit } from '@angular/core';
import * as flickity from 'flickity';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  toggleZoom: boolean[];
  scrolled: boolean = false;
  index: number;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.images = this.galleryService.images;
    this.toggleZoom = Array.from(
      { length: this.images.length },
      (item) => false
    );
  }

  onToggleZoom(e: Event, ind: number): void {
    this.index = ind--;
    this.toggleZoom.fill(false);
    this.toggleZoom[ind] = !this.toggleZoom[ind];
  }

  onScroll(e: Event, ind: number): void {
    e.stopPropagation();
    this.index = ind--;
    this.scrolled = true;
    this.images.push(this.images.shift());
  }
}
