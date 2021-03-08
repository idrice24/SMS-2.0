import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './components/videos/videos.component';
import { ImagesComponent } from './components/images/images.component';



@NgModule({
  declarations: [VideosComponent, ImagesComponent],
  imports: [
    CommonModule
  ]
})
export class MediasModule { }
