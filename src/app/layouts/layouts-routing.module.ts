import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'landing' , pathMatch:'full' },
      { path: 'landing', loadChildren: '../landing/landing.module#LandingModule' },
      {
        path: 'auth', loadChildren: './auth/auth.module#AuthLoginModule'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
