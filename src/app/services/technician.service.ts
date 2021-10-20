import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Technician } from '../models/technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  baseUrl: String = environment.baseUrl;


  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<Technician[]> {
    const url = this.baseUrl + "/technician";
    return this.http.get<Technician[]>(url);
  }

  create(technician: Technician): Observable<Technician> {
    const url = this.baseUrl + "/technician";
    return this.http.post<Technician>(url, technician);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    })
  }
}
