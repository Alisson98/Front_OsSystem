import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-create',
  templateUrl: './technician-create.component.html',
  styleUrls: ['./technician-create.component.css']
})
export class TechnicianCreateComponent implements OnInit {
  technician: Technician = {
    id: '',
    name: 'Valdir',
    cpf: '780.294.680-83',
    phone: '(99) 90000-0000'
  }

  constructor(
    private router: Router,
    private service: TechnicianService) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['technical'])
  }

  create(): void {
    this.service.create(this.technician).subscribe((response) => {
      this.router.navigate(['technical'])
      this.service.message('Technician Created!')
    }, err => {
      console.log(err)
      if (err.error.error.match('CPF is already in use!')) {
        this.service.message(err.error.error)
      }
    })
  }
}
