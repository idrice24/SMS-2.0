import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SharedModule } from '../shared/shared.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: PostListComponent, data: { animation: 'BlogPage' } },
  { path: ':id', component: PostDetailComponent }
];
@NgModule({
  declarations: [
  PostListComponent,
  PostDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: []
})
export class BlogModule { }
