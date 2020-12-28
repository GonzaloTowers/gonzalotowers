import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitelayoutComponent } from '../sitelayout/sitelayout.component';
import { MyWorkComponent } from './mywork.component';


export const MY_WORK_ROUTES: Routes = [
  {path: '',
    children: [
      {path: '', component: MyWorkComponent, pathMatch: 'full'},
      {path: 'web', component: SitelayoutComponent},
      {path: 'mobile', component: SitelayoutComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(MY_WORK_ROUTES)],
  exports: [RouterModule]
})
export class MyworkRoutingModule { }