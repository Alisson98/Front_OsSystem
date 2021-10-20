import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Technician } from '../models/technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  
  baseUrl: String = environment.baseUrl;


  constructor(private http : HttpClient) { }

  findAll():Observable<Technician[]> {
    const url = this.baseUrl + "/technician";
    return this.http.get<Technician[]>(url);
  }
}
