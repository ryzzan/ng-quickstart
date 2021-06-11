import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import { LoginComponent } from '../../components/login/login.component';
import { RecoverPasswordComponent } from '../../components/recover-password/recover-password.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children:[
    {path: 'login', component: LoginComponent},
    {path: 'recover-password', component: RecoverPasswordComponent},
    {path: 'change-password', component: ChangePasswordComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  ]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
