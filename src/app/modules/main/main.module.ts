import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

/** Components */
import { AnimalFormComponent } from 'src/app/components/animal-form/animal-form.component';
import { AnimalTableComponent } from 'src/app/components/animal-table/animal-table.component';
import { MainComponent } from './main.component';
import { MvpTestComponent } from 'src/app/components/mvp-test/mvp-test.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';


@NgModule({
  declarations: [
    AnimalFormComponent,
    AnimalTableComponent,
    MainComponent,
    MvpTestComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
