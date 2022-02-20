import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'landing' , pathMatch:'full' },
      { path: 'landing', loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule) },
      {
        path: 'auth', loadChildren: () => import('../auth/auth-login.module').then(m => m.AuthLoginModule)
      },
      {
        path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'chat', loadChildren: () => import('../chat/chat.module').then(m => m.ChatModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
