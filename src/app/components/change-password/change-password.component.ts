import {
  Component
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm = new FormGroup({
    'password': new FormControl(null, [Validators.required]),
    'repeatPassword': new FormControl(null, [Validators.required])
  });
  changePasswordSubmit = () => {
  };
}
