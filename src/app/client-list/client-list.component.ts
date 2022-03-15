import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  private getClients() {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    })
  }

  ngOnInit(): void {
    this.getClients();
  }

}
