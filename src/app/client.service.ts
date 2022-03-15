import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private baseURL = "http://localhost:8080/clients";

  constructor(private HttpClient: HttpClient) { }

  getAllClients(): Observable<Client[]>{
    return this.HttpClient.get<Client[]>(this.baseURL);
  }

}
