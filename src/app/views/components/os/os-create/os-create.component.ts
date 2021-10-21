import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { OS } from 'src/app/models/os';
import { Technician } from 'src/app/models/technician';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {

  
  os: OS = {
    technician: '',
    client: '',
    obs: '',
    priority: '',
    status: ''
  }
  technician: Technician[] = [];
  client: Client[] = [];
  constructor(
    private technicianService: TechnicianService,
    private clientService: ClientService,
    private service: OsService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAllTechnician();
    this.findAllClient();
  }
  create():void {
    this.service.create(this.os).subscribe( response => {
      this.service.message("OS created successfully!");
      this.router.navigate(['os'])
    })
  }
  findAllTechnician(): void {
    this.technicianService.findAll().subscribe(response => {
      this.technician = response;
    })
  }
  findAllClient(): void {
    this.clientService.findAll().subscribe(response => {
      this.client = response;
    })
  }
  cancel():void {
    this.router.navigate(['os'])
  }
}
