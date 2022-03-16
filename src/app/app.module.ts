import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { FormsModule } from '@angular/forms';
import { ViewClientComponent } from './view-client/view-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ContactListComponent,
    CreateClientComponent,
    ViewClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
