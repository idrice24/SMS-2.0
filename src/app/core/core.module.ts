import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistryComponent } from './components/registry/registry.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [HomeComponent, LoginComponent, PageNotFoundComponent, RegistryComponent],
  imports: [
    CommonModule,
    RouterModule, // Links will not works important!!
    FormsModule, // Form will not works important!!
    ReactiveFormsModule, // Form will not works important!!
    ButtonModule, // Due to Rounded and Outlined Icon Buttons
    RippleModule, // Due to pRippe in home.html
    
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistryComponent,
    InputTextModule,
    CardModule

  ]
})
export class CoreModule { }
