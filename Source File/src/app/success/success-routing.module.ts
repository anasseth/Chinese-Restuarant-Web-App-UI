import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'success',
        component: SuccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessRoutingModule { }
