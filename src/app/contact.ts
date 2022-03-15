import { Client } from "./client";

export class Contact {

    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    mobile: string;
    client: Client
    dateCreation: Date;
    dateMAJ: Date;
}
