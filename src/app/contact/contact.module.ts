import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' }
  }];



@NgModule({
  declarations: [
  ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
