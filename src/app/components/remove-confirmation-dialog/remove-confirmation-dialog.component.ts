import {
  Component, Inject
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
export interface RemoveConfirmationDialogDialogData {
    teste: string,
    teste2: string,
}
@Component({
  selector: 'app-remove-confirmation-dialog',
  templateUrl: './remove-confirmation-dialog.component.html',
  styleUrls: ['./remove-confirmation-dialog.component.css']
}) export class RemoveConfirmationDialogComponent {
  id: string = this.removeConfirmationDialogRoute.snapshot.params['id'];
  isAddModule: boolean = !this.id;
  constructor(
    private removeConfirmationDialogFormBuilder: FormBuilder, 
    private removeConfirmationDialogRoute: ActivatedRoute, 
    private removeConfirmationDialogRouter: Router, 
    public removeConfirmationDialogDialogRef: MatDialogRef<RemoveConfirmationDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: RemoveConfirmationDialogDialogData) {
    this.setForm();
  };
  removeConfirmationDialogForm = this.removeConfirmationDialogFormBuilder.group({});
  setForm = () => {
    if (!this.isAddModule) {
      console.log(29); /** TO-DO */ /** Service this.userService.getById(this.id).pipe(first()).subscribe(x => this.form.patchValue(x));*/
    }
  }
  removeConfirmationDialogSubmit = () => {
    fetch('$ENV$/acl', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(this.removeConfirmationDialogForm.value),
    }).then((data) => {
      data.json().then((keys) => {})
    });
  }
  RemoveConfirmationDialogOnNoClick(): void {
    this.removeConfirmationDialogDialogRef.close();
  }
}
