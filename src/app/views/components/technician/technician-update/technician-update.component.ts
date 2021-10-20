import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technician-update',
  templateUrl: './technician-update.component.html',
  styleUrls: ['./technician-update.component.css']
})
export class TechnicianUpdateComponent implements OnInit {

  id_tec = '';
  technician: Technician = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  }
  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  phone = new FormControl('', [Validators.minLength(11)])

  constructor(
    private router: Router,
    private service: TechnicianService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update():void {
    this.service.update(this.technician).subscribe((response) => {
      this.router.navigate(['technical'])
      this.service.message('Technician updated successfully ')
    }, err => {
      console.log(err)
      if (err.error.error.match('CPF is already in use!')) {
        this.service.message(err.error.error)
      }
      else if (err.error.listErrors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido") {
        this.service.message('Invalid Cpf')
      }
    })
  }

  findById():void {
    this.service.findById(this.id_tec).subscribe(response => {
      this.technician = response;
    })
  }
  cancel(): void {
    this.router.navigate(['technical'])
  }

  errorValidName() {
    if (this.name.invalid) {
      return 'The name must be between 5 and 100 characters'
    }
    else {
      return false
    }
  }

  errorValidCPF() {
    if (this.name.invalid) {
      return 'The CPF must be 11 characters'
    }
    else {
      return false
    }
  }

  errorValidPhone() {
    if (this.name.invalid) {
      return 'The CPF must be 11 characters'
    }
    else {
      return false
    }
  }
}
