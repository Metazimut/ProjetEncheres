import {Publication} from "./publication";

export class Commentaire {
  constructor(id?:number, version?:number, message?: string, dateCreation?: Date,
              utilisateur?:Utilisateur, publication?:Publication) {}
}
