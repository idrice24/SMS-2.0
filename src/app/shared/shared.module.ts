import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ForbittenEmailValidatorDirective } from './directives/forbitten-email-validator.directive';
// import { ForbittenFnameValidatorDirective } from './directives/forbitten-fName-validator.directive';
import { ForbittenPasswordValidatorDirective } from './directives/forbitten-password-validator.directive';
import { SafePipe } from './pipes/safe.pipe';
import { MenubarModule } from 'primeng/menubar';
// import { GallerySharedComponent } from './components/gallery-shared/gallery-shared.component';
import { MessageService } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { ListboxModule } from 'primeng/listbox';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
// import { MissionService } from './services/mission.service';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ForbittenEmailValidatorDirective,
    // ForbittenFnameValidatorDirective,
    ForbittenPasswordValidatorDirective,
    SafePipe,
    // GallerySharedComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // <-- NgModel lives here
    ReactiveFormsModule,

    // All externe Module (PrimenNG)
    TableModule,
    DialogModule,
    TabMenuModule,
    FileUploadModule,
    TableModule,
    DialogModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    SidebarModule,
    MenubarModule,
    DataViewModule,
    TooltipModule, // Tooltip directive provides advisory information for a component
    CardModule,
    RippleModule,
    PanelModule,
    DropdownModule,
    ProgressSpinnerModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule, // To use p-button in html file
    FieldsetModule,
    ListboxModule,
    MenuModule,
    ButtonModule,
    RadioButtonModule, // to use p-ratiobutton
    CarouselModule, // To use p-carousel in html file
    ToastModule //  allows usage of toast in html file
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    // GallerySharedComponent, // allows home to use it
    SafePipe,
    ForbittenEmailValidatorDirective,
    // ForbittenFnameValidatorDirective,
    ForbittenPasswordValidatorDirective,
    RouterModule,
    ReactiveFormsModule,
    // All externe Module (PrimenNG)
    TableModule,
    DialogModule,
    FileUploadModule,
    TableModule,
    DialogModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    SidebarModule,
    MenubarModule,
    DataViewModule,
    TooltipModule, // Tooltip directive provides advisory information for a component
    CardModule,
    RippleModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule, // To use p-button in html file
    FieldsetModule,
    ListboxModule,
    ButtonModule,
    CarouselModule,
    TooltipModule,
    MenubarModule,
    MenuModule,
    DataViewModule,
    CardModule,
    PanelModule,
    RippleModule, // use new concept to export extern module
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    RadioButtonModule,
    FieldsetModule,
    ListboxModule,
    ToastModule, //  allow others module to use toast i.e. app.Module
    ButtonModule, // to wrap access to other module .ie. shoppingModule
  ],
  providers: [
    Title, // To Configure the angular title built-in-service
    MessageService, // to provide all toast msg for all app module
    // MissionService, // This alo to use  this service in any module in  app
    Location, // Beauce Angular team not set the  ProvideIn flag
  ]
})
export class SharedModule { }
