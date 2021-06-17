import {
  Component
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  recoverPasswordForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email, ]),
    'repeatEmail': new FormControl(null, [Validators.required, Validators.email, ])
  });
  recoverPasswordSubmit = () => {
  };
}
