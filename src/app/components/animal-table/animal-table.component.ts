import {
  Component
} from '@angular/core';
import {
  RemoveConfirmationDialogComponent
} from '../remove-confirmation-dialog/remove-confirmation-dialog.component';
import {
  MatDialog
} from '@angular/material/dialog';
@Component({
  selector: 'app-animal-table',
  templateUrl: './animal-table.component.html',
  styleUrls: ['./animal-table.component.css']
}) export class AnimalTableComponent {
  constructor(private animalTableDialog: MatDialog) {};
  animalTableDataSource = [{
    "name": "Cake",
    "species": "Canina",
    "phone": "(82) 98205-1109"
  }, {
    "name": "Tetê",
    "species": "Canina",
    "phone": "(82) 99924-2682"
  }, {
    "name": "Dona Gata",
    "species": "Felina",
    "phone": "(82) 99924-2682"
  }];
  animalTableDisplayedColumns: string[] = ['name', 'species', 'phone', 'undefined'];
  animalTableOpenDialog = () => {
    const animalTableDialogRef = this.animalTableDialog.open(RemoveConfirmationDialogComponent, {})
  };
}
