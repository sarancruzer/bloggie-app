import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalLayoutComponent } from './layouts/vertical-layout/vertical-layout.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
   },
  {
    path:'', 
    component: VerticalLayoutComponent, 
    children:[
     { 
       path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
     },
     {
       path:'home',  
       loadChildren:()=>import('./modules/home/home.module').then(e=>e.HomeModule)
     },
     {
      path:'auth',  
      loadChildren:()=>import('./modules/auth/auth.module').then(e=>e.AuthModule)
    },
  ]
 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'corrected', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
