import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsComponent } from './panels.component';


const routes: Routes = [
  {
    path: '',
    component: PanelsComponent,
    data: {
      title: 'Panels'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelsRoutingModule {}
