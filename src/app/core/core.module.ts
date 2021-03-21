import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistryComponent } from './components/registry/registry.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactModule } from '../contact/contact.module';
import { SharedModule } from '../shared/shared.module';
import { BlogModule } from '../blog/blog.module';





@NgModule({
  declarations: [HomeComponent, LoginComponent, PageNotFoundComponent, RegistryComponent],
  imports: [
    CommonModule,
    RouterModule, // Links will not works important!!
    FormsModule, // Form will not works important!!
    ReactiveFormsModule, // Form will not works important!!
    ContactModule,
    SharedModule,
    
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    // BlogModule,
    PageNotFoundComponent,
    RegistryComponent,
    SharedModule

  ]
})
export class CoreModule { }
