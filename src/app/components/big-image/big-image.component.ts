import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrl: './big-image.component.scss'
})
export class BigImageComponent {
  @Input() imageUrl: string = 'https://64.media.tumblr.com/9b1596ccf92baab2144c9f53833e0037/tumblr_ppremv83Oq1qh66wqo2_1280.jpg';
  @Input() imageText: string  =  'Изображние пропало в черной дыре :(';
  
  imageZoomed = false;
  
  toggleImageZoomed() {
    this.imageZoomed =!this.imageZoomed;
  }
}
