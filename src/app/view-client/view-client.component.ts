import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {

  client: Client;
  id: number;

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) { }
  
  deleteClient(id: number) {
    this.clientService.deleteClientById(id).subscribe(data => {
      console.log(data);
      this.clientService.getClientById(this.id);
      this.goToClientList();
    })
    
  }

  goToClientList() {
    this.router.navigate(["clients"]);
  }

  
  updateClient(id:number) {
    this.router.navigate(['update-client', id]);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    })

  }

}
