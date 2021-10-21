import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: String = environment.baseUrl;


  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<Client[]> {
    const url = this.baseUrl + "/client";
    return this.http.get<Client[]>(url);
  }
}
