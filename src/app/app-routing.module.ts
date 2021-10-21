import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { ClientDeleteComponent } from './views/components/client/client-delete/client-delete.component';
import { ClientReadComponent } from './views/components/client/client-read/client-read.component';
import { ClientUpdateComponent } from './views/components/client/client-update/client-update.component';
import { HomeComponent } from './views/components/home/home.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
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
  },
  {
    path: 'customers',
    component: ClientReadComponent
  },
  {
    path: 'customers/create',
    component: ClientCreateComponent
  },
  {
    path: 'customers/update/:id',
    component: ClientUpdateComponent
  },
  {
    path: 'customers/delete/:id',
    component: ClientDeleteComponent
  },
  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
