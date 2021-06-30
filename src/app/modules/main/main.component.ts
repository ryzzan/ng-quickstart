import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmationDialogComponent } from 'src/app/components/logout-confirmation-dialog/logout-confirmation-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  menu = [
    {
      router: '/main/dashboard',
      title: 'Página inicial',
      icon: 'dashboard',
      itens: [],
    },
    {
      router: '/main/test',
      title: 'Teste',
      icon: 'account_circle',
      itens: [],
    }
  ];

  isMenuOpened = true;

  constructor(private logoutDialog: MatDialog) {};

  ngOnInit(): void {
  }

  logoutOpenDialog = () => {
    const logoutDialogRef = this.logoutDialog.open(LogoutConfirmationDialogComponent, {})
  }

}
