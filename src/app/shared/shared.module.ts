import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { SafePipe } from './pipes/safe.pipe';
import { ForbittenEmailValidatorDirective } from './directives/forbitten-email-validator.directive';
import { ForbittenPasswordValidatorDirective } from './directives/forbitten-password-validator.directive';
import { ForbittenFNameValidatorDirective } from './directives/forbitten-f-name-validator.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';



@NgModule({
  declarations: [
  SafePipe,
  ForbittenEmailValidatorDirective,
  ForbittenPasswordValidatorDirective,
  ForbittenFNameValidatorDirective,
  FooterComponent,
  HeaderComponent,
  SideBarComponent,
  TopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    Title, // To Configure the angular title built-in-service
 //   MessageService, // to provide all toast msg for all app module
 //   MissionService, // This alo to use  this service in any module in  app
    Location, // Beauce Angular team not set the  ProvideIn flag
  ]
})
export class SharedModule { }
