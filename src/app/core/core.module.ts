import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistryComponent } from './components/registry/registry.component';



@NgModule({
  declarations: [HomeComponent, LoginComponent, PageNotFoundComponent, RegistryComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
