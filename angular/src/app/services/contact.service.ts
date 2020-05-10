import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  

  constructor(private http: HttpClient) {
  }

  addContact(contact: Contact) {
    return this.http.post('http://localhost:3000/form', contact);
  }
}
