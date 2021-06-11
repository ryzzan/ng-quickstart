import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modules

const routes: Routes = [
  { path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
	{ path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
