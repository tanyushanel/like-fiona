import { GalleryService } from './gallery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  toggleZoom: boolean[];

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
    this.index = ind;

    this.toggleZoom.fill(false);
    this.toggleZoom[ind] = !this.toggleZoom[ind];
  }

  onScroll(dir: number, ind: number): void {
    let piece = this.images.splice(dir, 1).join();
    dir === 0 ? this.images.push(piece) : this.images.unshift(piece);
  }
}
