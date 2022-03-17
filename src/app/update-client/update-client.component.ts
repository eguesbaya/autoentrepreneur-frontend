import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: number;
  client: Client = new Client();
  
  constructor(private clientService: ClientService, private route: ActivatedRoute, private router:Router) { }

  goToViewClient() {
    return this.router.navigate(['/view-client', this.id]);
  }
  
  onSubmit(): void {
    this.clientService.updateClient(this.id, this.client).subscribe(data => {
      this.goToViewClient();
    }, error => console.log(error)
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    })
  }

}
