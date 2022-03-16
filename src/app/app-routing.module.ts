import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientListComponent } from "./client-list/client-list.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { CreateClientComponent } from "./create-client/create-client.component";

const routes: Routes = [
    { path: "clients", component: ClientListComponent },
    { path: "create-client", component: CreateClientComponent},
    { path: "contacts", component: ContactListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}