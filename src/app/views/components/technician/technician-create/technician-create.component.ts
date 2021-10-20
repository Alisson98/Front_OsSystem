import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
    name: '',
    cpf: '',
    phone: ''
  }

  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  phone = new FormControl('', [Validators.minLength(11)])


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
      else if (err.error.listErrors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido"){
        this.service.message('Invalid Cpf')
      }
    })
  }

  errorValidName() {
    if(this.name.invalid){
      return 'The name must be between 5 and 100 characters'
    }
    else {
      return false
    }
  }

  errorValidCPF() {
    if(this.name.invalid){
      return 'The CPF must be 11 characters'
    }
    else {
      return false
    }
  }

  errorValidPhone() {
    if(this.name.invalid){
      return 'The CPF must be 11 characters'
    }
    else {
      return false
    }
  }
}
