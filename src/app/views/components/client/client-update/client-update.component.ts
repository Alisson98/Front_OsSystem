import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id_cli = '';

  client: Client = {
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
    private service: ClientService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cli = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  cancel(): void {
    this.router.navigate(['customers'])
  }
  findById():void {
    this.service.findById(this.id_cli).subscribe(response => {
      this.client = response;
    })
  }

  update(): void {
    this.service.update(this.client).subscribe((response) => {
      this.router.navigate(['customers'])
      this.service.message('Client Updated!')
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

