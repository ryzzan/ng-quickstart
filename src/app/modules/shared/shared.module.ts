import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalTableComponent } from 'src/app/components/animal-table/animal-table.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class SharedModule { }