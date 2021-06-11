import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { List } from './list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {
  @Input() objectToCreateList?: List;
  @Output() listOutput = new EventEmitter();
  
  isLoading = true;
  data = [{}];

  constructor() { }

  ngOnChanges(): void {
  }

  populateData = () => {
    
  }
}
