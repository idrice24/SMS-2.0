import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';



@NgModule({
  declarations: [AboutUsComponent, NewsLetterComponent],
  imports: [
    CommonModule
  ]
})
export class AssociationModule { }
