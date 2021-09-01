import {Publication} from "./publication";
import {Utilisateur} from "./utilisateur";

export class Commentaire {
  utilisateur: Utilisateur;
  dateCreation: Date;
  message: string;
  publication:Publication;

  constructor(id?:number, version?:number, message?: string, dateCreation?: Date,
              utilisateur?:Utilisateur, publication?:Publication) {
    this.utilisateur=utilisateur;
    this.dateCreation=dateCreation;
    this.message=message;
    this.publication=publication;
  }
}
