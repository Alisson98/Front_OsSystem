import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-os-closed',
  templateUrl: './os-closed.component.html',
  styleUrls: ['./os-closed.component.css']
})
export class OsClosedComponent implements AfterViewInit {

  osList: OS[] = [];

  displayedColumns: string[] = ['client', 'technician', 'openDate', 'closingDate', 'priority', 'status','action'];
  dataSource = new MatTableDataSource<OS>(this.osList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: OsService,
    private router: Router,
    private technicianService: TechnicianService,
    private clientService: ClientService) { }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      response.forEach(x =>{
        if(x.status == "CLOSED"){
          this.osList.push(x);
        }
      })
      this.findAllTechnician();
      this.findAllClient();
      this.dataSource = new MatTableDataSource<OS>(this.osList);
      this.dataSource.paginator = this.paginator;
    })
  }

  findAllTechnician():void {
    this.osList.forEach(x => {
      this.technicianService.findById(x.technician).subscribe(response =>{
        x.technician = response.name
      })
    })
  }
  findAllClient():void {
    this.osList.forEach(x => {
      this.clientService.findById(x.client).subscribe(response =>{
        x.client = response.name
      })
    })
  }

  priority(x: any) {
    if(x == 'LOW'){
      return 'low'
    }
    else if(x == 'MEDIUM'){
      return 'medium'
    }
    else {
      return 'high'
    }
  }
 
}
