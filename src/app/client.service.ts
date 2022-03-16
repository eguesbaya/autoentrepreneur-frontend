import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private baseURL = "http://localhost:8080/clients/";

  constructor(private HttpClient: HttpClient) { }

  getAllClients(): Observable<Client[]>{
    return this.HttpClient.get<Client[]>(this.baseURL);
  }

  createClient(client: Client): Observable<Object> {
    return this.HttpClient.post(this.baseURL, client);
  }

  getClientById(id: number): Observable <Client> {
    return this.HttpClient.get<Client>(this.baseURL + id);
  }

  //This is a REST client call
  deleteClientById(id: number): Observable<Object> {
    return this.HttpClient.delete(this.baseURL + id);
  }



}
