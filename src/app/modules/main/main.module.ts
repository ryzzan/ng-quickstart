import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

/** Components */
import { MainComponent } from './main.component';
import { MvpTestComponent } from 'src/app/components/mvp-test/mvp-test.component';


@NgModule({
  declarations: [
    MainComponent,
    MvpTestComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
