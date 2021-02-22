import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { ManageBlogComponent } from './components/manage-blog/manage-blog.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ManageAbonnementComponent } from './components/manage-abonnement/manage-abonnement.component';
import { StudentDashBoardComponent } from './components/student-dash-board/student-dash-board.component';
import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';
import { SharedModule } from '../shared/shared.module.ts';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    ManageBlogComponent, 
    ManageUserComponent, 
    ManageAbonnementComponent, 
    StudentDashBoardComponent,
    AdminDashBoardComponent
    ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
