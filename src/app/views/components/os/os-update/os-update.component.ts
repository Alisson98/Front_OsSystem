import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { OS } from 'src/app/models/os';
import { Technician } from 'src/app/models/technician';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent implements OnInit {


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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get('id');
    this.findAllTechnician();
    this.findAllClient();
    this.findById();
  }

  findById(): void {
    this.service.findById(this.os.id).subscribe(response => {
      this.os = response;
      this.convertData();
    })
  }
  update(): void {
    this.service.update(this.os).subscribe(response => {
      this.service.message("OS updating successfully!");
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
  cancel(): void {
    this.router.navigate(['os'])
  }

  convertData(): void {
    if(this.os.status=="OPEN"){
      this.os.status = 0;
    }else if(this.os.status=="PROGRESS"){
      this.os.status = 1;
    }else {
      this.os.status = 2;
    }

    if(this.os.priority=="LOW"){
      this.os.priority = 0;
    }else if(this.os.priority=="MEDIUM"){
      this.os.priority = 1;
    }else {
      this.os.priority = 2;
    }
  }
}

