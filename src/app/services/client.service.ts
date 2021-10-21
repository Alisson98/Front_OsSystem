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

  findById(id: any): Observable<Client> {
    const url = `${this.baseUrl}/client/${id}`;
    return this.http.get<Client>(url);
  }

  create(client: Client): Observable<Client> {
    const url = this.baseUrl + "/client";
    return this.http.post<Client>(url, client);
  }

  update(client: Client):Observable<Client> {
    const url = `${this.baseUrl}/client/${client.id}`;
    return this.http.put<Client>(url, client);
  }
  message(msg: String): void {
    this.snack.open(`${msg}`, 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    })
  }
}
