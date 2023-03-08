import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path:'',
    component : AppLayoutComponent,
    children : [
      {
       path:'',
       loadChildren : () => import('../app/modules/dashboard/dashboard.module').then(m=>m.DashboardModule) 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
