import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements AfterViewInit {

  client: Client[] = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone', 'action'];
  dataSource = new MatTableDataSource<Client>(this.client);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : ClientService,
    private router : Router){}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((response) => {
      this.client = response;
      this.dataSource = new MatTableDataSource<Client>(this.client);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['customers/create'])
  }
}
