export class Client {

    id: number;
    raisonSociale: string;
    siren: string;
    dateCreation: Date;
    dateMAJ: Date;
    // contacts: Array<Contact>;


  constructor(
    id: number, 
    raisonSociale: string, 
    siren: string, 
    dateCreation: Date, 
    dateMAJ: Date, 
    // contacts: Array<Contact>
) {
    this.id = id
    this.raisonSociale = raisonSociale
    this.siren = siren
    this.dateCreation = dateCreation
    this.dateMAJ = dateMAJ
    // this.contacts = contacts
  }


}
