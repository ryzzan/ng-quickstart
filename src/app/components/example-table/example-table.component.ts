import {
  RemoveConfirmationDialogComponent
} from '../remove-confirmation-dialog/remove-confirmation-dialog.component';
import {
  Component
} from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css']
}) export class ExampleTableComponent {
  constructor(private exampleTableDialog: MatDialog, ) {}
  
  exampleTableDisplayedColumns: string[] = ['name', 'birthday', 'gender', 'undefined', ];
  exampleTableDataSource = [{
    "name": "Agenor de Miranda Araújo Neto",
    "birthday": "04/04/1958",
    "gender": "Masculino"
  }, {
    "name": "Aroldo Alves Sobrinho",
    "birthday": "17/02/1953",
    "gender": "Masculino"
  }, {
    "name": "Larissa de Macedo Machado",
    "birthday": "30/03/1993",
    "gender": "Masculino"
  }, {
    "name": "Renato Manfredini Júnior",
    "birthday": "27/03/1960",
    "gender": "Masculino"
  }];
  removeConfirmationDialogOpenDialog = () => {
    const removeConfirmationDialogDialogRef = this.exampleTableDialog.open(RemoveConfirmationDialogComponent, {})
  };
}
