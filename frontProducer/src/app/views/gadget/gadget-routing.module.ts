import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GadgetComponent } from './gadget.component';


const routes: Routes = [
  {
    path: '',
    component: GadgetComponent,
    data: {
      title: 'Gadget'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GadgetRoutingModule {}
