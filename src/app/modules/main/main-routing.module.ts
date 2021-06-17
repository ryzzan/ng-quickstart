import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components */
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { MvpTestComponent } from 'src/app/components/mvp-test/mvp-test.component';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'test', component: MvpTestComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  ]},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
