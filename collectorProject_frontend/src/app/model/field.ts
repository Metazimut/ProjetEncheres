import {Utilisateur} from "./utilisateur";

export class Field {
  id : number;
  version: number;
  categorie : string;
  auteur : Utilisateur;


  constructor(id: number, version: number, categorie: string, auteur: Utilisateur) {
    this.id = id;
    this.version = version;
    this.categorie = categorie;
    this.auteur = auteur;
  }
}
