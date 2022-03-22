import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router:Router) { }
  
  goToViewClient(id: number) {
    this.router.navigate(["view-client", id]);
  }

  private getContacts() {
    this.contactService.getAllContacts().subscribe(data => {
      this.contacts = data;
    })
  }

  ngOnInit(): void {
    this.getContacts();
  }

}
