// [Ref]: https://angular.io/guide/router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RegistryComponent } from './core/components/registry/registry.component';
import { PostListComponent } from './blog/components/post-list/post-list.component';
import { AboutUsComponent } from './association/components/about-us/about-us.component';
import { NewsLetterComponent } from './association/components/news-letter/news-letter.component';
import { VideosComponent } from './medias/components/videos/videos.component';
import { ImagesComponent } from './medias/components/images/images.component';
import { ContactComponent } from './contact/components/contact.component';



// sets up routes constant where you define your routes
const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
{ path: 'login', component: LoginComponent }, // to move to authModule
{ path: 'registry', component: RegistryComponent },  // to move to authModule
{ path: 'posts', component: PostListComponent },
{ path: 'about-us', component: AboutUsComponent},
{ path: 'news-letter', component: NewsLetterComponent },
{ path: 'medias/videos', component: VideosComponent },
{ path: 'medias/images', component: ImagesComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', component: PageNotFoundComponent }
];

// configures NgModule imports and exports
// ,  { enableTracing: true } // <-- debugging purposes only
@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
