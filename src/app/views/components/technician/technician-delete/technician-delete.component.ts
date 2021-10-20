import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-delete',
  templateUrl: './technician-delete.component.html',
  styleUrls: ['./technician-delete.component.css']
})
export class TechnicianDeleteComponent implements OnInit {

  id_tec = '';
  technician: Technician = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  }

  constructor(
    private router: Router,
    private service: TechnicianService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_tec).subscribe(response => {
      this.technician = response;
    })
  }
  delete():void {
    this.service.delete(this.id_tec).subscribe(response => {
      this.router.navigate(['technical']);
      this.service.message('Technician successfully deleted')
    }, err =>{
      if(err.error.error.match('Technician has open service orders!')){
        this.service.message('Technician has open service orders!');
      }
    })
  }
  cancel(): void {
    this.router.navigate(['technical'])
  }

}
