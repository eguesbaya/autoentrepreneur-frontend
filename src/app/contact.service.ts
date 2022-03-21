import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL = "http://localhost:8080/contacts/";

  constructor(private httpClient: HttpClient) { }

  getAllContacts(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.baseURL);
  }
}
