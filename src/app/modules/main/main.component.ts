import { Component, OnInit } from '@angular/core';

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
      router: '/main/user-list',
      title: 'Usuários',
      icon: 'account_circle',
      itens: [],
    },
  ];

  isMenuOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

}
