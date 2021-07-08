import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// My modules
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

// My components
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import { LoginComponent } from '../../components/login/login.component';
import { RecoverPasswordComponent } from '../../components/recover-password/recover-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RecoverPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
