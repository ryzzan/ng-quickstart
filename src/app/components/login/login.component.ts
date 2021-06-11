import {
  Component
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) export class LoginComponent {
  constructor () {}

  loginForm = new FormGroup({
    'user': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required]),
  });

  loginSubmit = () => {
  }
}
