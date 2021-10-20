import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TechnicianCreateComponent } from './views/components/technician/technician-create/technician-create.component';
import { TechnicianDeleteComponent } from './views/components/technician/technician-delete/technician-delete.component';
import { TechnicianReadComponent } from './views/components/technician/technician-read/technician-read.component';
import { TechnicianUpdateComponent } from './views/components/technician/technician-update/technician-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'technical',
    component: TechnicianReadComponent
  },
  {
    path: 'technical/create',
    component: TechnicianCreateComponent
  },
  {
    path: 'technical/update/:id',
    component: TechnicianUpdateComponent
  },
  {
    path: 'technical/delete/:id',
    component: TechnicianDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
