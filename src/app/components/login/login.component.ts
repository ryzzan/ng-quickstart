import {
  Component
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) export class LoginComponent {
  constructor (private loginFormBuilder: FormBuilder) {}

  loginForm = this.loginFormBuilder.group({
    'user': [null, [Validators.required]],
    'password': [null, [Validators.required]],
  });


  loginSubmit = () => {
  }
}
