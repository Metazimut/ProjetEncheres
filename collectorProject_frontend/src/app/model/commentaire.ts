import {Publication} from "./publication";
import {Utilisateur} from "./Utilisateur";

export class Commentaire {
  constructor(id?:number, version?:number, message?: string, dateCreation?: Date,
              utilisateur?:Utilisateur, publication?:Publication) {}
}
