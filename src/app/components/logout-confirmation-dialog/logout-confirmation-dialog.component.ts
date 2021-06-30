import {
  Component
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
@Component({
  selector: 'app-logout-confirmation-dialog',
  templateUrl: './logout-confirmation-dialog.component.html',
  styleUrls: ['./logout-confirmation-dialog.component.css']
}) export class LogoutConfirmationDialogComponent {
  id: string = this.logoutConfirmationDialogRoute.snapshot.params['id'];
  isAddModule: boolean = !this.id;
  constructor(private logoutConfirmationDialogFormBuilder: FormBuilder, private logoutConfirmationDialogRoute: ActivatedRoute, private logoutConfirmationDialogRouter: Router, public logoutConfirmationDialogDialogRef: MatDialogRef < LogoutConfirmationDialogComponent > , ) {
    this.setForm();
  };
  logoutConfirmationDialogForm = this.logoutConfirmationDialogFormBuilder.group({});
  setForm = () => {
    if (!this.isAddModule) {
      console.log(29); /** TO-DO */ /** Service this.userService.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));*/
    }
  }
  LogoutConfirmationDialogOnNoClick(): void {
    this.logoutConfirmationDialogDialogRef.close();
  }
}
